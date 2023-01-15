@EndUserText.label: 'ZC consumption view'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
define root view entity ZC_PHONE_INFO
  as projection on ZI_PHONE_INFO
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
      status
}
