@EndUserText.label: 'ZC consumption2 view'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@UI.headerInfo: {
    typeName: 'Invoice',
    typeNamePlural: 'Invoices',
    title: {value: 'id'},
    description: {value: 'name'}
}
@Metadata.allowExtensions: true
define root view entity ZC_PHONE_INFO2
provider contract transactional_query
  as projection on ZI_PHONE_INFO2
{
      @UI.facet: [{
              id: 'PhoneData',
              purpose: #STANDARD,
              label: 'Phone Data',
              type: #IDENTIFICATION_REFERENCE,
              position: 10
           },{
              id: 'Upload',
              label: 'Upload your images',
              position: 20,
              purpose: #STANDARD,
              type: #LINEITEM_REFERENCE,
              targetElement: '_Phone_Images'
           }]
      @UI: {
          selectionField: [{position: 10 }],
          lineItem: [{position: 10 }],
          identification: [{position: 10 }]
      }
  key id,
      @UI: {
      selectionField: [{position: 20 }],
      lineItem: [{position: 20 }],
      identification: [{position: 20 }]
      }
      name,
      @UI: {
          selectionField: [{position: 30 }],
          lineItem: [{position: 30 }],
          identification: [{position: 30 }]
      }
      brand,
      @UI: {
        selectionField: [{position: 40 }],
        lineItem: [{position: 40 }],
        identification: [{position: 40 }]
      }
      fake_price,
      @UI: {
         selectionField: [{position: 50 }],
         lineItem: [{position: 50 }],
         identification: [{position: 50 }]
      }
      real_price,
      @UI: {
      selectionField: [{position: 60 }],
      lineItem: [{position: 50 }],
      identification: [{position: 60 }]
      }
      description,
      @UI: {
        selectionField: [{position: 70 }],
        lineItem: [{position: 70 }],
        identification: [{position: 70 }]
      }
      cpu,
      @UI: {
         selectionField: [{position: 80 }],
         lineItem: [{position: 80 }],
         identification: [{position: 80 }]
      }
      gpu,
      @UI: {
        selectionField: [{position: 90 }],
        lineItem: [{position: 90 }],
        identification: [{position: 90 }]
      }
      ram,
      @UI: {
         selectionField: [{position: 100 }],
         lineItem: [{position: 100 }],
         identification: [{position: 100 }]
      }
      memory,
      @UI: {
      selectionField: [{position: 110 }],
      lineItem: [{position: 110 }],
      identification: [{position: 110 }]
      }
      screen_size,
      @UI: {
         selectionField: [{position: 120 }],
         lineItem: [{position: 120 }],
         identification: [{position: 120 }]
      }
      battery,
      @UI: {
          selectionField: [{position: 130 }],
          lineItem: [{position: 130 }],
          identification: [{position: 130 }]
      }
      front_camera,
      @UI: {
        selectionField: [{position: 140 }],
        lineItem: [{position: 140 }],
        identification: [{position: 140 }]
      }
      rear_camera,
      @UI: {
        selectionField: [{position: 150 }],
        lineItem: [{position: 150 }],
        identification: [{position: 150 }]
      }
      release_year,
      @UI: {
        selectionField: [{position: 160 }],
        lineItem: [{position: 160 }],
        identification: [{position: 160 }]
      }
      sim,
      @UI: {
        selectionField: [{position: 170 }],
        lineItem: [{position: 170 }],
        identification: [{position: 170 }]
      }
      status,
      _Phone_Images : redirected to composition child ZC_PHONE_IMAGE2
}
