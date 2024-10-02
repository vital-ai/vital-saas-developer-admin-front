package ai.vital.saas.developer.admin.front

import io.vertx.groovy.ext.web.handler.StaticHandler
import io.vertx.groovy.ext.web.Router
import io.vertx.groovy.ext.web.RoutingContext
import io.vertx.groovy.core.Vertx
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

class VitalSaaSDeveloperAdminFront {

	private final static Logger log = LoggerFactory.getLogger(VitalSaaSDeveloperAdminFront.class)

	public static String appID
	
	// must end with /, may have prefixes etc
	
	public static String httpsURL
	
	public static String websiteURL
	
	public static boolean webappConnected
	
	public static String webappURL
	
	public static String saasServerURL
	
	public static String eventbusURL
	
	public static String sessionDomain
	
	public static String cookiePrefix
	
	public static Boolean cookieSecure

	public static Boolean rolesCheckEnabled
	
	public static String webroot = null // "webroot"
	
	static Vertx vertxInstance
	
	public static void main(String[] args) {

		if(args.length != 1) {
			System.err.println "Usage: vitalSaaSDeveloperAdminFront <config_file>"
			System.exit(1)
			return
		}
	
		File confFile = new File(args[0])

		log.info "Conf file: ${confFile.absolutePath}"

		try {

			Config cfg = ConfigFactory.parseFile(confFile)

			Config webserverCfg = cfg.getConfig("webserver")

			String host = webserverCfg.getString("host")
			int port = webserverCfg.getInt("port")

			log.info "Webserver, host: ${host}, port: ${port}"

			appID = cfg.getString("appID")

			log.info "appID: ${appID}"

			httpsURL = cfg.getString('httpsURL')
			
			log.info "httpsURL: ${httpsURL}"

			websiteURL = cfg.getString('websiteURL')
			
			log.info "websiteURL: ${websiteURL}"

			webappConnected = cfg.getBoolean('webappConnected')

			log.info "webappConnected: ${webappConnected}"
			
			webappURL = cfg.getString('webappURL')
			
			log.info("webappURL: ${webappURL}")

			saasServerURL = cfg.getString('saasServerURL')
			
			log.info("saasServerURL: ${saasServerURL}")
			
			eventbusURL = cfg.getString('eventbusURL')
			
			log.info "eventbusURL: ${eventbusURL}"
			
			sessionDomain = cfg.getString('sessionDomain')
			
			log.info("sessionDomain: ${sessionDomain}")

			cookiePrefix = cfg.getString('cookiePrefix')
			
			log.info("cookiePrefix: ${cookiePrefix}")
			
			cookieSecure = cfg.getBoolean('cookieSecure')
			
			log.info("cookieSecure: ${cookieSecure}")

			rolesCheckEnabled = cfg.getBoolean('rolesCheckEnabled')

			log.info "rolesCheckEnabled: ${rolesCheckEnabled}"
			
			webroot = cfg.getString("webroot")

			log.info "webroot: ${webroot}"

			vertxInstance = Vertx.vertx()
										
			def router = Router.router( vertxInstance )

			IndexFileHandler ifh = new IndexFileHandler(vertxInstance, webroot)
						
			router.route().handler( { RoutingContext ctx ->
				ctx.response().putHeader("Cache-Control", "no-store, no-cache")
				ctx.next()
			})
			
			router.route("/").handler(ifh)

			router.route("/home").handler(ifh)

			router.route("/login").handler(ifh)
			
			router.routeWithRegex(".*\\.html").handler(ifh)
			
			router.route("/js/config.js").handler(ifh)
			
			router.get('/status').handler(new StatusHandler())

			StaticHandler sh = StaticHandler.create()
			
			sh.setWebRoot(webroot)
			
			sh.setFilesReadOnly(false)
			
			sh.setCachingEnabled(false)
			
			router.route().handler(sh)

			Vertx.vertx().createHttpServer().requestHandler(router.&accept).listen(port, host)
			
		} catch(Exception ex) {

			ex.printStackTrace()
		}
	}
}
