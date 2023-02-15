@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ROOT CDS'
define root view entity ZI_PHONE_INFO2 as select from zphone_info2
composition[1..*] of zi_phone_image2 as _Phone_Images
{
  key id,
      name,
      brand,
      fake_price,
      real_price,
      description,
      cpu,
      gpu,
      ram,
      memory,
      screen_size,
      battery,
      front_camera,
      rear_camera,
      release_year,
      sim,
      status,
      _Phone_Images
}
