@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity zi_phone_image3
  as select from zphone_image3
  association to parent ZI_PHONE_INFO3 as _Phone on $projection.phone_id = _Phone.id
{
  key id,
      @EndUserText.label: 'Phone ID'
      phone_id,
      @EndUserText.label: 'URL'
      url,
      _Phone
}
