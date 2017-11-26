/**
 * @flow
 * @relayHash 2e9a3f99cb288fbe0119715d02ad62ce
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppAllDocsQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query AppAllDocsQuery {
  viewer {
    ...ListView_viewer
    id
  }
}

fragment ListView_viewer on Viewer {
  allDoctorses(last: 200) {
    edges {
      node {
        firstname
        lastname
        subTitle
        description
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllDocsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListView_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppAllDocsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppAllDocsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 200,
                    "type": "Int"
                  }
                ],
                "concreteType": "DoctorsConnection",
                "name": "allDoctorses",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "DoctorsEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Doctors",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "firstname",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "lastname",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "subTitle",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allDoctorses{\"last\":200}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppAllDocsQuery {\n  viewer {\n    ...ListView_viewer\n    id\n  }\n}\n\nfragment ListView_viewer on Viewer {\n  allDoctorses(last: 200) {\n    edges {\n      node {\n        firstname\n        lastname\n        subTitle\n        description\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
