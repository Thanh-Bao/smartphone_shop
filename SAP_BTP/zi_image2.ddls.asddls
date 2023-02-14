@AbapCatalog.sqlViewName: 'ZIMAGES2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '.'
define view zi_image2 as select from zimage2
{
    key id,
    phone_id,
    path 
}
