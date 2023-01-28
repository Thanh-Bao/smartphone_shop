CLASS zcl_test_phone_info DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_test_phone_info IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA : lv_opr TYPE c VALUE 'C'.

    CASE lv_opr.
      WHEN 'C'.

        DATA new_phone TYPE TABLE FOR CREATE zi_phone_info.

        new_phone = VALUE #(
        ( id = 1277 name = 'Iphone 12' )
          ( id = 1211 name = 'Iphone X' )
          ( id = 1255 name = 'Iphone 8s Plus' )
         ).

        MODIFY ENTITIES OF zi_phone_info
        ENTITY zi_phone_info
        CREATE SET FIELDS WITH new_phone
         MAPPED DATA(lt_mapped)
         FAILED DATA(lt_failed)
         REPORTED DATA(lt_reported).

        COMMIT ENTITIES.
        RETURN.
      WHEN 'U'.
      WHEN 'R'.
      WHEN 'D'.
    ENDCASE.


  ENDMETHOD.

ENDCLASS.
