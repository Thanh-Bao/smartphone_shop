@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity zi_phone_image2
  as select from zphone_image2
  association to parent ZI_PHONE_INFO2 as _Phone on $projection.phone_id = _Phone.id
{
  key id,
      @EndUserText.label: 'Phone ID'
      phone_id,
      @EndUserText.label: 'Attachment'
      @Semantics.largeObject: {
      mimeType: 'Minetype',
      fileName: 'Filename',
      contentDispositionPreference: #INLINE
      }
      attachment,
      @EndUserText.label: 'Type of Document'
      minetype,
      @EndUserText.label: 'File Type'
      filename,
      _Phone
}
