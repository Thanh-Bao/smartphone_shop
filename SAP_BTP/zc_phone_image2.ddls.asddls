@EndUserText.label: 'Attachment projection'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@UI.headerInfo: {
    typeName: 'Attachment',
    typeNamePlural: 'Attachments',
    title: {value: 'Filename'}
}
define view entity ZC_PHONE_IMAGE2 as projection on zi_phone_image2
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
    attachment,
      @UI: {
        lineItem: [{position: 40 }],
        identification: [{position: 40 }]
    }
    minetype,
      @UI: {
        lineItem: [{position: 50 }],
        identification: [{position: 50 }]
    }
    filename,
    /* Associations */
    _Phone: redirected to parent ZC_PHONE_INFO2
}
