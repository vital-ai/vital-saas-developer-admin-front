package ai.vital.saas.developer.admin.front

import io.vertx.groovy.core.Vertx
import org.apache.commons.io.FileUtils
import org.apache.commons.io.IOUtils
import org.slf4j.LoggerFactory
import io.vertx.core.Handler
import io.vertx.groovy.core.http.HttpServerResponse
import io.vertx.groovy.ext.web.RoutingContext

class IndexFileHandler implements Handler<RoutingContext>{

	private final static org.slf4j.Logger log = LoggerFactory.getLogger(IndexFileHandler.class)
	
	long lastModTime = 0L
	
	static class CachedContent {
		boolean classpath
		String content
		long length
		long fileTimestamp = 0
		long lastCheckTimestamp = 0
	}
	
	static Map<String, CachedContent> cachedContent = Collections.synchronizedMap([:])
	
	static Vertx vertxInstance = null
	
	static String webroot = null
	
	public IndexFileHandler(Vertx vertxInstance, String webroot) {
		
		this.vertxInstance = vertxInstance
		
		// set this at instantiation time
		
		this.webroot = webroot	
	}
	
	@Override
	public void handle(RoutingContext context) {

		try {
			
			String path = context.request().path();
			
			HttpServerResponse resp = context.response()
			
			log.debug("Input path: ${path}")
			
			if(path.endsWith("/")) path += "index.html"

			if(path.endsWith("/home")) { path = "/index.html" }

			if(path == "/login") { path = "/index.html" }

			CachedContent cc = cachedContent.get(path)
			
			long ctime = System.currentTimeMillis()
			
			//check if file has changed if last check timestamp was 10 seconds ago
			if(cc != null && ( cc.classpath || ( !cc.classpath && ( ctime - cc.lastCheckTimestamp ) < 10000 ) ) ) {
				
				log.debug("Returned immediately cached");
				
				sendContent(cc, resp)
				
				return	
			}
			
			if(cc != null) {
				
				//we have already a cached file, check timestamp
				File f = new File("./${webroot}" + path)
				
				if(!f.exists()) {
					cachedContent.remove(path)
					resp.setStatusCode(404).end("File not found", "UTF-8")
					return
				}
			
				long lm = f.lastModified();
				
				if(lm != cc.fileTimestamp) {
					
					log.debug("File has changed");
					
					//refresh the file
					String s = FileUtils.readFileToString(f, "UTF-8")
					
					processContent(s, cc)
					
					cc.fileTimestamp = lm

				} else {
					log.debug("File unchanged");
				}
				
				cc.lastCheckTimestamp = ctime
				
				sendContent(cc, resp)
				return	
			}
			
			String classPathLocation = "${webroot}" + path
			
			try {
				URL url = IndexFileHandler.class.getResource(classPathLocation)
				if(url != null) {
					String content = IOUtils.toString(url, "UTF-8")
					cc = new CachedContent()
					cc.classpath = true
					processContent(content, cc)
					cachedContent.put(path, cc)
					sendContent(cc, resp)
					return
				}
				
			} catch(Exception e) {
			}
		
			// we have already a cached file, check timestamp
			File f = new File("./${webroot}" + path)
				
			if(!f.exists()) {
				resp.setStatusCode(404).end("File not found", "UTF-8")
				return
			}
			
			cc = new CachedContent()
			processContent(FileUtils.readFileToString(f, "UTF-8"), cc)
			cc.classpath = false
			cc.fileTimestamp = f.lastModified()
			cc.lastCheckTimestamp = ctime
			
			cachedContent.put(path, cc)
			
			log.debug("Cached new file");
			
			sendContent(cc, resp)
		
		} catch(Exception e) {
			log.error(e.localizedMessage, e)
		}		
	}

	void processContent(String s, CachedContent cc) {
		
		// just replace all ${PREFIX} variables

		// GLOBAL INJECTED CONFIG
		cc.content = s
			.replace('${APP_ID}', VitalSaaSDeveloperAdminFront.appID)
			.replace('${HTTPS_URL}', VitalSaaSDeveloperAdminFront.httpsURL)
			.replace('${WEBSITE_URL}', VitalSaaSDeveloperAdminFront.websiteURL)
			.replace('${WEBAPP_CONNECTED}', '' + VitalSaaSDeveloperAdminFront.webappConnected)
			.replace('${WEBAPP_URL}', VitalSaaSDeveloperAdminFront.webappURL)
			.replace('${SAAS_SERVER_URL}', VitalSaaSDeveloperAdminFront.saasServerURL)
			.replace('${EVENTBUS_URL}', VitalSaaSDeveloperAdminFront.eventbusURL)
			.replace('${SESSION_DOMAIN}', VitalSaaSDeveloperAdminFront.sessionDomain)
			.replace('${COOKIE_PREFIX}', '' + VitalSaaSDeveloperAdminFront.cookiePrefix)
			.replace('${COOKIE_SECURE}', '' + VitalSaaSDeveloperAdminFront.cookieSecure)
			.replace('${ROLES_CHECK_ENABLED}', '' + VitalSaaSDeveloperAdminFront.rolesCheckEnabled);
			
		cc.length = cc.content.getBytes("UTF-8").length
		
	}
	
	void sendContent(CachedContent cc, HttpServerResponse resp) {
		
		resp.headers().add("Content-Type", "text/html; charset=UTF-8").add("Content-Length", "" + cc.length)
		resp.end(cc.content, "UTF-8")

	}
}
