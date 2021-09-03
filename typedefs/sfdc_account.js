const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Account @key(fields: "Id") {
    Id: ID!
    IsDeleted: Boolean
    MasterRecordId: String
    Name: String
    Type: String
    ParentId: String
    BillingStreet: String
    BillingCity: String
    BillingState: String
    BillingPostalCode: String
    BillingCountry: String
    BillingLatitude: String
    BillingLongitude: String
    BillingGeocodeAccuracy: String
    BillingAddress: String
    ShippingStreet: String
    ShippingCity: String
    ShippingState: String
    ShippingPostalCode: String
    ShippingCountry: String
    ShippingLatitude: String
    ShippingLongitude: String
    ShippingGeocodeAccuracy: String
    ShippingAddress: String
    Phone: String
    Fax: String
    AccountNumber: String
    Website: String
    PhotoUrl: String
    Sic: String
    Industry: String
    AnnualRevenue: String
    NumberOfEmployees: String
    Ownership: String
    TickerSymbol: String
    Description: String
    Rating: String
    Site: String
    OwnerId: ID!
    CreatedDate: String
    CreatedById: ID!
    LastModifiedDate: String
    LastModifiedById: String
    SystemModstamp: String
    LastActivityDate: String
    LastViewedDate: String
    LastReferencedDate: String
    IsPartner: Boolean
    IsCustomerPortal: Boolean
    ChannelProgramName: String
    ChannelProgramLevelName: String
    Jigsaw: String
    JigsawCompanyId: String
    CleanStatus: String
    AccountSource: String
    DunsNumber: String
    Tradestyle: String
    NaicsCode: String
    NaicsDesc: String
    YearStarted: String
    SicDesc: String
    DandbCompanyId: String
    OperatingHoursId: String
    CustomerPriority__c: String
    SLA__c: String
    Active__c: String
    NumberofLocations__c: String
    UpsellOpportunity__c: String
    SLASerialNumber__c: String
    SLAExpirationDate__c: String
    Intuit_Id__c: String
    Shopify_Id__c: String
  
   
  }
  
  type Query {
    getAccount(Id: String): Account
    getAccounts(qry: String):[Account]
   } 
`;
  module.exports = typeDefs;
  
  