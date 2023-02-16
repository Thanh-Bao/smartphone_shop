@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ROOT CDS'
define root view entity ZI_PHONE_INFO2
  as select from zphone_info2
  composition [1..*] of zi_phone_image2 as _Phone_Images
{
  key id,
      @EndUserText.label: 'Name'
      name,
      @EndUserText.label: 'Brand'
      brand,
      @EndUserText.label: 'Fake price'
      fake_price,
      @EndUserText.label: 'Real price'
      real_price,
      @EndUserText.label: 'Description'
      description,
      @EndUserText.label: 'CPU'
      cpu,
      @EndUserText.label: 'GPU'
      gpu,
      @EndUserText.label: 'RAM'
      ram,
      @EndUserText.label: 'Memory'
      memory,
      @EndUserText.label: 'Screen size'
      screen_size,
      @EndUserText.label: 'Batterty'
      battery,
      @EndUserText.label: 'Front Camera'
      front_camera,
      @EndUserText.label: 'Rear Camera'
      rear_camera,
      @EndUserText.label: 'Release Year'
      release_year,
      @EndUserText.label: 'SIM'
      sim,
      @EndUserText.label: 'Status'
      status,
      _Phone_Images
}
