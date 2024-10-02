if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_taxonomy_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-taxonomy",
  "name" : "haley-taxonomy-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "92f8a08ffc15a7a936b0d036e09c7e33",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/haley-taxonomy#Edge_hasBroaderCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley-taxonomy#hasDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-taxonomy#Edge_hasEquivalentCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley-taxonomy#hasDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-taxonomy#Edge_hasNarrowerCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley-taxonomy#hasDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-taxonomy#Edge_hasRelatedCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley-taxonomy#hasDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-taxonomy#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-taxonomy#hasExternalID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-taxonomy#isLeafCategory" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-taxonomy#isRootCategory" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-taxonomy#isSelectable" : {
        "type" : "boolean"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-taxonomy#hasDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-taxonomy#Edge_hasBroaderCategory", "http://vital.ai/ontology/haley-taxonomy#Edge_hasEquivalentCategory", "http://vital.ai/ontology/haley-taxonomy#Edge_hasNarrowerCategory", "http://vital.ai/ontology/haley-taxonomy#Edge_hasRelatedCategory", "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "description",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-taxonomy#hasExternalID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "externalID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-taxonomy#isLeafCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "leafCategory",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-taxonomy#isRootCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "rootCategory",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-taxonomy#isSelectable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "selectable",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_taxonomy_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_taxonomy_0_1_0_schema;

}