@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ROOT CDS'
define root view entity ZI_PHONE_INFO3
  as select from zphone_info3
  composition [1..*] of zi_phone_image3 as _Phone_Images
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
      _Phone_Images
}
