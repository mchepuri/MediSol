/**
 * @flow
 * @relayHash f98f195874070dcdf8d659e50dd07a9a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewDoctorsSubscriptionVariables = {| |};
export type NewDoctorsSubscriptionResponse = {|
  +Doctors: ?{|
    +node: ?{|
      +id: string;
      +firstname: string;
      +lastname: string;
      +description: string;
    |};
  |};
|};
*/


/*
subscription NewDoctorsSubscription {
  Doctors(filter: {mutation_in: [CREATED, UPDATED]}) {
    node {
      id
      firstname
      lastname
      description
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewDoctorsSubscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "mutation_in": [
                "CREATED",
                "UPDATED"
              ]
            },
            "type": "DoctorsSubscriptionFilter"
          }
        ],
        "concreteType": "DoctorsSubscriptionPayload",
        "name": "Doctors",
        "plural": false,
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
                "name": "id",
                "storageKey": null
              },
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
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "Doctors{\"filter\":{\"mutation_in\":[\"CREATED\",\"UPDATED\"]}}"
      }
    ],
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewDoctorsSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "NewDoctorsSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "mutation_in": [
                "CREATED",
                "UPDATED"
              ]
            },
            "type": "DoctorsSubscriptionFilter"
          }
        ],
        "concreteType": "DoctorsSubscriptionPayload",
        "name": "Doctors",
        "plural": false,
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
                "name": "id",
                "storageKey": null
              },
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
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "Doctors{\"filter\":{\"mutation_in\":[\"CREATED\",\"UPDATED\"]}}"
      }
    ]
  },
  "text": "subscription NewDoctorsSubscription {\n  Doctors(filter: {mutation_in: [CREATED, UPDATED]}) {\n    node {\n      id\n      firstname\n      lastname\n      description\n    }\n  }\n}\n"
};

module.exports = batch;
