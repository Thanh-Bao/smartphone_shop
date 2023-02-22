CLASS zcl_test_phone_info3 DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_test_phone_info3 IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA lv_opr TYPE String VALUE 'D'.

    CASE lv_opr.
      WHEN 'C'.

        DATA new_phone TYPE TABLE FOR CREATE zi_phone_info3.

        new_phone = VALUE #(
        ( id = 1277 name = 'Iphone 12' )
          ( id = 1211 name = 'Iphone X' )
          ( id = 1255 name = 'Iphone 8s Plus' )
         ).

        MODIFY ENTITIES OF zi_phone_info3
        ENTITY zi_phone_info3
        CREATE SET FIELDS WITH new_phone
         MAPPED DATA(lt_mapped)
         FAILED DATA(lt_failed)
         REPORTED DATA(lt_reported).

        COMMIT ENTITIES.
        RETURN.

      WHEN 'U'.

        DATA _phone TYPE TABLE FOR UPDATE zi_phone_info3.
        _phone = VALUE #( ( id = 1277 name = 'Iphone 12 12') ).

        MODIFY ENTITIES OF zi_phone_info3
        ENTITY zi_phone_info3
        UPDATE SET FIELDS WITH _phone
           MAPPED lt_mapped
           FAILED lt_failed
           REPORTED lt_reported.

        COMMIT ENTITIES
        RESPONSE OF zi_phone_info3
        FAILED DATA(faild_commit)
        REPORTED DATA(reported_commit).
        RETURN.

      WHEN 'R_Single'.

        READ ENTITIES OF zi_phone_info3
        ENTITY zi_phone_info3
         ALL FIELDS WITH VALUE #( ( Id = 1277 ) )
         RESULT DATA(single_phone)
         FAILED lt_failed
           REPORTED lt_reported.

        out->write( single_phone ).
        RETURN.

        WHEN 'R_All'.

*        READ ENTITIES OF zi_phone_info3
*        ENTITY zi_phone_info3
*         ALL FIELDS WITH value #( (  ) )
*         RESULT DATA(list_phone)
*         FAILED lt_failed
*           REPORTED lt_reported.
*
*        out->write( list_phone ).
        RETURN.

      WHEN 'D'.

        MODIFY ENTITIES OF zi_phone_info3
        ENTITY zi_phone_info3
        DELETE FROM VALUE #( ( id = 5444443 ) ( id = 5444444 ) ( id = 5444445 ) ( id = 456789 ) )
        FAILED lt_failed
        REPORTED lt_reported.

        COMMIT ENTITIES
               RESPONSE OF zi_phone_info3
               FAILED faild_commit
               REPORTED reported_commit.
        RETURN.
    ENDCASE.

  ENDMETHOD.

ENDCLASS.
