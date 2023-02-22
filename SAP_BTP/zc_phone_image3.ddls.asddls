@EndUserText.label: 'Attachment projection'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@UI.headerInfo: {
    typeName: 'Attachment',
    typeNamePlural: 'Attachments',
    title: {value: 'phone_id'}
}
define view entity ZC_PHONE_IMAGE3 as projection on zi_phone_image3
{
  @UI.facet: [{
        position: 10,
        purpose: #STANDARD,
        type: #IDENTIFICATION_REFERENCE,
        label: 'Attachment Info',
        id: 'AttachmentData'
     }]
    @UI: {
        lineItem: [{position: 10 }],
        identification: [{position: 10 }]
    }
    key id,
      @UI: {
        lineItem: [{position: 20 }],
        identification: [{position: 20 }]
    }
    phone_id,
      @UI: {
        lineItem: [{position: 30 }],
        identification: [{position: 30 }]
    }
    url,
      @UI: {
        lineItem: [{position: 40 }],
        identification: [{position: 40 }]
    }

    /* Associations */
    _Phone: redirected to parent ZC_PHONE_INFO3
}
