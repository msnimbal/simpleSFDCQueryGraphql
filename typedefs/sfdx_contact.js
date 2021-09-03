const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Contact @key(fields: "Id") {
    Id: ID!
    IsDeleted: Boolean
    MasterRecordId: String
    AccountId: ID
    LastName: String
    FirstName: String
    Salutation: String
    Name: String
    OtherStreet: String
    OtherCity: String
    OtherState: String
    OtherPostalCode: String
    OtherCountry: String
    OtherLatitude: String
    OtherLongitude: String
    OtherGeocodeAccuracy: String
    OtherAddress: String
    MailingStreet: String
    MailingCity: String
    MailingState: String
    MailingPostalCode: String
    MailingCountry: String
    MailingLatitude: String
    MailingLongitude: String
    MailingGeocodeAccuracy: String
    MailingAddress: String
    Phone: String
    Fax: String
    MobilePhone: String
    HomePhone: String
    OtherPhone: String
    AssistantPhone: String
    ReportsToId: String
    Email: String
    Title: String
    Department: String
    AssistantName: String
    LeadSource: String
    Birthdate: String
    Description: String
    OwnerId: ID
    CreatedDate: String
    CreatedById: ID
    LastModifiedDate: String
    LastModifiedById: ID
    SystemModstamp: String
    LastActivityDate: String
    LastCURequestDate: String
    LastCUUpdateDate: String
    LastViewedDate: String
    LastReferencedDate: String
    EmailBouncedReason: String
    EmailBouncedDate: String
    IsEmailBounced: Boolean
    PhotoUrl: String
    Jigsaw: String
    JigsawContactId: String
    CleanStatus: String
    IndividualId: String
    Level__c: String
    Languages__c: String
    Shopify_Id__c: String
  }
  type Query {
    getContact(Id: String): Contact
    getContacts(qry: String): [Contact]
  }
`;

module.exports = typeDefs;
