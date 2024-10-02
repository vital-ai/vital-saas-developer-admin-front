if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_ai_kg_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-ai-kg",
  "name" : "haley-ai-kg-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "4fd33a2d4f625fc07430093693025965",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley-ai-question" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/haley-ai-question#HaleyContainer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGDataHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGVersion" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley-ai-question#HaleyParameter",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasActorKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGActor" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasAgentKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasChatMessageKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityKGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityTypePartOfKGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEventKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEvent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasGroupKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasIncomingKGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGActor",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag", "http://vital.ai/ontology/haley-ai-kg#KGGroup", "http://vital.ai/ontology/haley-ai-kg#KGOrganization", "http://vital.ai/ontology/haley-ai-kg#KGRating", "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGActor" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAgent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGGroup", "http://vital.ai/ontology/haley-ai-kg#KGOrganization", "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAgentDuplicate",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAgentPublisher",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAggregation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuery" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAnnotation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEventType", "http://vital.ai/ontology/haley-ai-kg#KGDocumentType", "http://vital.ai/ontology/haley-ai-kg#KGEntityType", "http://vital.ai/ontology/haley-ai-kg#KGEventType", "http://vital.ai/ontology/haley-ai-kg#KGFileType", "http://vital.ai/ontology/haley-ai-kg#KGFrameType", "http://vital.ai/ontology/haley-ai-kg#KGRelationType", "http://vital.ai/ontology/haley-ai-kg#KGSlotType", "http://vital.ai/ontology/haley-ai-kg#KGTaskType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAnnotation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGBroadCategory",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent", "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction", "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatMessage",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCriterion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGSearch" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGDocumentFileNode",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGDocumentSegment",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasEdgeName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDataHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEntity",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent", "http://vital.ai/ontology/haley-ai-kg#KGEntity", "http://vital.ai/ontology/haley-ai-kg#KGEvent", "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGStatement", "http://vital.ai/ontology/haley-ai-kg#KGTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFlag",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGOrganization" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentAttempt",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentFileNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGInstruction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGInstruction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGInteractionDependency",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGInteractionElement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest", "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGMedia",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGMedia" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGMediaFileNode",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGMedia" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGNarrowCategory",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGOrganization",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGOrganization" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGPath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGVisit" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGPath" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGPathElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGPath", "http://vital.ai/ontology/haley-ai-kg#KGPathElement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGPathElement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGPointer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGPathElement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGPointer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGQueryCriteriaGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup", "http://vital.ai/ontology/haley-ai-kg#KGQueryExploreTraversal", "http://vital.ai/ontology/haley-ai-kg#KGQueryTraversal" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGQueryExploreTraversal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryTraversal" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryExploreTraversal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGQueryGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuery", "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGQuerySort",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuery" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuerySort" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGQueryTraversal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGQueryTraversal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRating",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRatingSummary",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRelationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGResource",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGResource" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRunDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunDocument" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlotType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlotType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGStatsSummary",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGTag",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGTag" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGTypePath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregation", "http://vital.ai/ontology/haley-ai-kg#KGQuerySort" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasOrganizationKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGOrganization" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasOutgoingKGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasPartOfKGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasRequestKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasResourceKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGResource" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasResponseKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasRunKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasSameAsKGEntity",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGActor", "http://vital.ai/ontology/haley-ai-kg#KGAgent", "http://vital.ai/ontology/haley-ai-kg#KGEntity", "http://vital.ai/ontology/haley-ai-kg#KGGroup", "http://vital.ai/ontology/haley-ai-kg#KGOrganization" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasSameAsKGType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasSubKGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasSubKGType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasTaskKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGActionAttemptDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGActionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGActionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGActionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGActionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGActor",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGActorType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGActorType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageSourceURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarLargeImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentDeploymentURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentImplIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentModificationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentNameSlug" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublishStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentServiceURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGBracketURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentPublishStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherWebsiteURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentPublisherType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentService",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionComments" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionCreator" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionApproved" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionConverted" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionReviewed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmissionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAgentType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAggregation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAggregationResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAggregationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAnnotation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasAnnotationText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAnnotationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAnnotationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAppEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventActorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventAgent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAppEventSource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAppEventType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAudio",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMedia",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGMediaDuration" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAudioSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasAudioSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGBeliefModeType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGBracket",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCalendarEventType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCategory",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGCategoryRoot" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCategoryType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatBotMessage",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGChatMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionCompleteText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionSummaryText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatInteractionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatMessage",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatMessageType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChatUserMessage",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGChatMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChoiceOptionSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotOptionValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGCodeDocumentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGCodeInterpreterVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSourceCode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCodeDocumentType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCodeLanguage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCodeSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasCodeSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGConstraintComparator",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCriterion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGConstraintComparatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGCriterionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGNodeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGRelationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryLongTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveFromConcepts" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveToConcepts" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiChoiceValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiTaxonomyValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorDistance" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorForce" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySerializedVector" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTaxonomyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTopKLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryURIValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryUnknownValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCriterionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasCurrencySlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDescriptor",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLanguageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentEndTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentExtractedContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHTMLContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHeadline" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentPublicationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentRetrievalDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTokenLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentStartTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSummary" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentTokenLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDocumentSegmentType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDocumentType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDoubleSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEntity",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGEntityType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEntityType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEvent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEventType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGExpressionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFileType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGFileType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFlag",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGFlagDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFlagDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFlagReasonURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFlagSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFlagType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFlagReason",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFlagSource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFlagType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasFrameSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFrameTypeDescriptor",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGDescriptor",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGGroupType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGGroupType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGImage",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMedia",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGPixelHeight" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGPixelWidth" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGImageSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasImageSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentAuthorList" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentContentPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentHTMLContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentHeadline" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentRetrievalDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentClassificationURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStorageTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatusCode" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentAttemptStatusTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttemptStatusType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentClassification",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentStorageType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIndexStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInstruction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGInstructionText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGInstructionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInstructionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInteraction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInteractionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGJSONSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasJsonSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGLongSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasLongSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMedia",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGMediaEncoding" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceOptionSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomyOptionSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTaxonomyOptionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasMultiTaxonomySlotValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeList" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeSummaryDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDataHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGOrganization",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGOrganizationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGOrganizationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGPath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGPathElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGPointer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGPointerNextURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGPointerPriorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGPointerURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryANDGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaANDGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaORGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryExploreTraversal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryORGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGQueryGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQuerySort",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQuerySortDirection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQuerySortType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGQueryTraversal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRating",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingStarValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueDouble" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingSource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingCalculationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageRatingDouble" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageStarRating" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNegativeCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNeutralCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryPositiveCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryReviewCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTotalCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingSummaryType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingValue",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRatingValueType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSymmetric" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGTypeRestriction",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDestinationRelationTypeRestrictionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRelationTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasSourceRelationTypeRestrictionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeDestinationOpen" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandDestination" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandSource" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSourceOpen" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRequest",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRequestType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRequestType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResource",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGResourceDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGResourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGResourceType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResourceType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResponse",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGResponseType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResponseType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRunDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRunCodeOutput" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRunDocumentType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRunDocumentType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRunSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasRunSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSearch",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGSearchDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSearchType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSearchType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotReferenceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasSlotSequence" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSlotTypDescriptor",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGDescriptor",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSlotType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasStatementText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCountPercentage" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriod" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodDay" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodMonth" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodYear" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGStatsSummaryType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTag",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTagName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTagType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTagType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTask",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTaskType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTaskType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTaxonomyOptionSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTaxonomyOptionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTenant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGGlobalTenant" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTextSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasTextSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTypeVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTypePath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGEntityType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFileType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGQueryRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGRelationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTaskType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGTypeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTypeRestriction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGURISlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasUriSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGValidType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGVideo",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMedia",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGMediaDuration" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGVideoSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasVideoSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGVisit",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#NewsCategory",
    "parent" : "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasAnnotationText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAnnotation" ],
    "shortName" : "annotationText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasAudioSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAudioSlot" ],
    "shortName" : "audioSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot" ],
    "shortName" : "booleanSlotValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotOptionValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChoiceOptionSlot" ],
    "shortName" : "choiceSlotOptionValues",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot" ],
    "shortName" : "choiceSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasCodeSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeSlot" ],
    "shortName" : "codeSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasCurrencySlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot" ],
    "shortName" : "currencySlotValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot" ],
    "shortName" : "dateTimeSlotValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDestinationRelationTypeRestrictionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "destinationRelationTypeRestrictionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "documentAttemptDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "documentAttemptStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatusCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "documentAttemptStatusCode",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentAuthorList",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentAuthorList",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentContentPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentContentPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentContentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument", "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "documentCorrectedURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentHTMLContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentHTMLContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentHeadline",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentHeadline",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument", "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "documentOriginalURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentPublicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentRetrievalDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentRetrievalDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDocumentVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "documentVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDoubleSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot" ],
    "shortName" : "doubleSlotValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasEdgeName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge" ],
    "shortName" : "edgeName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot" ],
    "shortName" : "fileUploadSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrame", "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot", "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "frameGraphURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFrameSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "shortName" : "frameSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasImageSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGImageSlot" ],
    "shortName" : "imageSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot" ],
    "shortName" : "integerSlotValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction" ],
    "shortName" : "interactionSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasJsonSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGJSONSlot" ],
    "shortName" : "jsonSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActionAttemptDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAction" ],
    "shortName" : "kGActionAttemptDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAction" ],
    "shortName" : "kGActionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAction" ],
    "shortName" : "kGActionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeList",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGActionTypeList",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeSummaryDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGActionTypeSummaryDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGActorType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGActor" ],
    "shortName" : "kGActorType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageSourceURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentAvatarImageSourceURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentAvatarImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarLargeImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentAvatarLargeImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentDeploymentURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentDeploymentURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentImplIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentImplIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentModificationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentModificationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentNameSlug",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentNameSlug",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublishStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentPublishStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentPublisherName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher" ],
    "shortName" : "kGAgentPublisherType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherWebsiteURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher" ],
    "shortName" : "kGAgentPublisherWebsiteURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory", "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentRankingScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory", "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentRankingScoreUpdateDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentServiceURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentServiceURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionComments",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionComments",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionCreator",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionCreator",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionSubmitterEmail",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionSubmitterName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAgentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGAgentType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregationResult" ],
    "shortName" : "kGAggregationDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregationResult" ],
    "shortName" : "kGAggregationIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregation", "http://vital.ai/ontology/haley-ai-kg#KGAggregationResult" ],
    "shortName" : "kGAggregationName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAggregation", "http://vital.ai/ontology/haley-ai-kg#KGAggregationResult" ],
    "shortName" : "kGAggregationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAnnotationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAnnotation" ],
    "shortName" : "kGAnnotationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventActorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAppEvent" ],
    "shortName" : "kGAppEventActorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventAgent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAppEvent" ],
    "shortName" : "kGAppEventAgent",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAppEvent" ],
    "shortName" : "kGAppEventSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGAppEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAppEvent" ],
    "shortName" : "kGAppEventType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGBeliefModeType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGBracketURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "kGBracketURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGCalendarEventType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGCategoryType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionCompleteText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction" ],
    "shortName" : "kGChatInteractionCompleteText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionSummaryText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction" ],
    "shortName" : "kGChatInteractionSummaryText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatInteraction" ],
    "shortName" : "kGChatInteractionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "shortName" : "kGChatInteractionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "shortName" : "kGChatMessageDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "shortName" : "kGChatMessageSequence",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "shortName" : "kGChatMessageText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChatMessage" ],
    "shortName" : "kGChatMessageType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCodeDocumentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "shortName" : "kGCodeDocumentType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCodeInterpreterVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "shortName" : "kGCodeInterpreterVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "shortName" : "kGCodeLanguageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "shortName" : "kGCodeLanguageVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGConstraintComparatorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGConstraintComparatorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument", "http://vital.ai/ontology/haley-ai-kg#KGMedia" ],
    "shortName" : "kGContentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCriterionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGCriterionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDataHash",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-question#HaleyContainer" ],
    "shortName" : "kGDataHash",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDescriptor" ],
    "shortName" : "kGDescriptorLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLanguageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDescriptor" ],
    "shortName" : "kGDescriptorLanguageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentEndTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentEndTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentExtractedContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentExtractedContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHTMLContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentHTMLContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHeadline",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentHeadline",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentPublicationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentPublicationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentRetrievalDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentRetrievalDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentSegmentIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTokenLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentSegmentTokenLength",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentSegmentTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentStartTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentStartTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSummary",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentSummary",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentTokenLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentTokenLength",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGDocumentType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument", "http://vital.ai/ontology/haley-ai-kg#KGMedia" ],
    "shortName" : "kGEncodedByteData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGEntityType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGEntityType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGEvent", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGEventType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGExpressionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFileType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFileType", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGFileType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFlagDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "shortName" : "kGFlagDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFlagDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "shortName" : "kGFlagDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFlagReasonURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "shortName" : "kGFlagReasonURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFlagSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "shortName" : "kGFlagSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFlagType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFlag" ],
    "shortName" : "kGFlagType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGFrameTypeDescriptor", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGFrameType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGGraphAssertionDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGGroupType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGGroup" ],
    "shortName" : "kGGroupType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGIndexDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentAttemptStatusTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt" ],
    "shortName" : "kGIndexDocumentAttemptStatusTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentClassificationURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "kGIndexDocumentClassificationURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "kGIndexDocumentStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStorageTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIndexDocument" ],
    "shortName" : "kGIndexDocumentStorageTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGIndexStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGInstructionText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInstruction" ],
    "shortName" : "kGInstructionText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGInstructionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInstruction" ],
    "shortName" : "kGInstructionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGInteractionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGMediaDuration",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAudio", "http://vital.ai/ontology/haley-ai-kg#KGVideo" ],
    "shortName" : "kGMediaDuration",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGMediaEncoding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMedia" ],
    "shortName" : "kGMediaEncoding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType", "http://vital.ai/ontology/haley-ai-question#HaleyContainer" ],
    "shortName" : "kGModelVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGOrganizationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGOrganization" ],
    "shortName" : "kGOrganizationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGPixelHeight",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGImage" ],
    "shortName" : "kGPixelHeight",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGPixelWidth",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGImage" ],
    "shortName" : "kGPixelWidth",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGPointerNextURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGPointer" ],
    "shortName" : "kGPointerNextURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGPointerPriorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGPointer" ],
    "shortName" : "kGPointerPriorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGPointerURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGPointer" ],
    "shortName" : "kGPointerURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryBooleanValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryBooleanValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryChoiceValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryDateTimeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryDateTimeValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuery" ],
    "shortName" : "kGQueryIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQueryKGMetaType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGNodeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryKGNodeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGRelationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryKGRelationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryKGType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryLongTextValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryLongTextValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveFromConcepts",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryMoveFromConcepts",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveToConcepts",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryMoveToConcepts",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryMultiChoiceValue",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiTaxonomyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryMultiTaxonomyValue",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorCertainty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryNearVectorCertainty",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorDistance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryNearVectorDistance",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorForce",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryNearVectorForce",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryPropertyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQueryPropertyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQueryProvenanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryRootURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQueryRootURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySerializedVector",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQuerySerializedVector",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortDirectionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuerySort" ],
    "shortName" : "kGQuerySortDirectionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGQuerySort" ],
    "shortName" : "kGQuerySortTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTaxonomyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryTaxonomyValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTextValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryTextValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryTopKLimit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryTopKLimit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryURIValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryURIValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGQueryUnknownValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion" ],
    "shortName" : "kGQueryUnknownValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingCalculationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingCalculationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingStarValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingStarValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageRatingDouble",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryAverageRatingDouble",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageStarRating",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryAverageStarRating",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNegativeCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryNegativeCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNeutralCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryNeutralCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryPositiveCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryPositiveCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryReviewCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryReviewCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTotalCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryTotalCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingSummaryType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueDouble",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingValueDouble",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating", "http://vital.ai/ontology/haley-ai-kg#KGRatingSummary" ],
    "shortName" : "kGRatingValueTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRating" ],
    "shortName" : "kGRatingValueURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRelationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGRelationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRelationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "kGRelationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRequestType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest" ],
    "shortName" : "kGRequestType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "shortName" : "kGRequestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGResourceDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResource" ],
    "shortName" : "kGResourceDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGResourceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResource" ],
    "shortName" : "kGResourceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGResourceType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResource" ],
    "shortName" : "kGResourceType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGResponseType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "shortName" : "kGResponseType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRunCodeOutput",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunDocument" ],
    "shortName" : "kGRunCodeOutput",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRunDocumentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunDocument" ],
    "shortName" : "kGRunDocumentType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSearchDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSearch" ],
    "shortName" : "kGSearchDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSearchType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSearch" ],
    "shortName" : "kGSearchType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotReferenceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGSlotReferenceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot", "http://vital.ai/ontology/haley-ai-kg#KGSlotTypDescriptor", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGSlotType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlotType" ],
    "shortName" : "kGSlotTypeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlotType" ],
    "shortName" : "kGSlotTypeLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlotType" ],
    "shortName" : "kGSlotTypeName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSourceCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCodeDocument" ],
    "shortName" : "kGSourceCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCountPercentage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryCountPercentage",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryPeriod",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodDay",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryPeriodDay",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodMonth",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryPeriodMonth",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodYear",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryPeriodYear",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatsSummary" ],
    "shortName" : "kGStatsSummaryType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTagName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTag" ],
    "shortName" : "kGTagName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTagType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTag" ],
    "shortName" : "kGTagType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTaskType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTask", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGTaskType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTaxonomyOptionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomyOptionSlot", "http://vital.ai/ontology/haley-ai-kg#KGTaxonomyOptionSlot" ],
    "shortName" : "kGTaxonomyOptionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTenant" ],
    "shortName" : "kGTenantAccountID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTenant" ],
    "shortName" : "kGTenantAccountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGTenant" ],
    "shortName" : "kGTenantIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTypePath", "http://vital.ai/ontology/haley-ai-question#HaleyParameter" ],
    "shortName" : "kGType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTypeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGTypeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTypeVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "shortName" : "kGTypeVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode" ],
    "shortName" : "kGValidTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-question#HaleyContainer" ],
    "shortName" : "kGVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "shortName" : "kGraphDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasLongSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGLongSlot" ],
    "shortName" : "longSlotValue",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot" ],
    "shortName" : "longTextSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceOptionSlot", "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceSlot" ],
    "shortName" : "multiChoiceSlotValues",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasMultiTaxonomySlotValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot" ],
    "shortName" : "multiTaxonomySlotValues",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "shortName" : "parentFrameURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent", "http://vital.ai/ontology/haley-ai-kg#KGChatMessage", "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "primaryLanguageType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasRunSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRunSlot" ],
    "shortName" : "runSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasSlotSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "slotSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasSourceRelationTypeRestrictionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "sourceRelationTypeRestrictionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasStatementText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "shortName" : "statementText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot" ],
    "shortName" : "taxonomySlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasTextSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTextSlot" ],
    "shortName" : "textSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgent" ],
    "shortName" : "topCategoryURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasUriSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGURISlot" ],
    "shortName" : "uriSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasVideoSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGVideoSlot" ],
    "shortName" : "videoSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionApproved",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionApproved",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionConverted",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionConverted",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionReviewed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission" ],
    "shortName" : "kGAgentSubmissionReviewed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGCategoryRoot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCategory" ],
    "shortName" : "kGCategoryRoot",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGGlobalTenant",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTenant" ],
    "shortName" : "kGGlobalTenant",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQuerySubclassExpansion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCriterion", "http://vital.ai/ontology/haley-ai-kg#KGTypePath" ],
    "shortName" : "kGQuerySubtypeExpansion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeDestinationOpen",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "kGRelationTypeDestinationOpen",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandDestination",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "kGRelationTypeExpandDestination",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "kGRelationTypeExpandSource",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSourceOpen",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction" ],
    "shortName" : "kGRelationTypeSourceOpen",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSymmetric",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationType" ],
    "shortName" : "kGRelationTypeSymmetric",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_ai_kg_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_ai_kg_0_1_0_schema;

}