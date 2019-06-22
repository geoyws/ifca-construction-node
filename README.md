# ifca-construction-node

For Monday's Demo

# Introduction

This repo contains the Construction Node.js GraphQL server and also is able to generate her corresponding PostgreSQL schema.

# Conventions

## URI

We will comply with [RFC3305's recommendation](https://tools.ietf.org/html/rfc3305#section-5). All grammar will be IETF's [ANBF](https://tools.ietf.org/html/rfc5234).

`Namespace ::= "C" (Core) | "F" (Finance) | "CM" (Construction management) ...`

`Type ::= "UserId" | "ContractId" | "VariationOrderId" ...`

`IFCA-URN ::== "urn" : "IFCA" : SchemeName @ SemVer : Namespace : Type : UUIDv1`

### Examples

This is how we will find resources in our system.

- `urn:IFCA:CM@0.1.0:C:UserId:6e8bc430-9c3a-11d9-9669-0800200c9a66`
- `urn:IFCA:CM@0.1.0:CM:ContractId:6e8bc440-9c3a-11d9-9669-0800200c9a67`

Tables will be identified via ContractId, VariationOrderId, RetentionId

# Database Principles

- We will attempt to follow the ["Party Model" paradigm](https://docs.oracle.com/cd/E63029_01/books/Secur/secur_accesscontrol022.htm).
- No multiple parties to a contract.
  - All contracts are to be between 2 parties for accounting control purposes.
  - Outside parties are not allowed to change any data at all for internal parties.
  - Hence, all data will only be accessed and mutated by internal parties.
    - Exceptions being secure and hardened integrated routines.
