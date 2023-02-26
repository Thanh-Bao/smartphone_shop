@EndUserText.label: 'ZC consumption2 view'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@UI.headerInfo: {
    typeName: 'Invoice',
    typeNamePlural: 'Invoices',
    title: {value: 'id'},
    description: {value: 'name'}
}
@Metadata.allowExtensions: true
define root view entity ZC_PHONE_INFO3
provider contract transactional_query
  as projection on ZI_PHONE_INFO3
{
   
  key id,
      name,
      brand_id,
      fake_price,
      real_price,
      description,
      cpu,
      gpu,
      ram,
      storage,
      screen_size,
      battery,
      front_camera,
      rear_camera,
      release_year,
      sim,
      status,
      _Phone_Images : redirected to composition child ZC_PHONE_IMAGE3
}
