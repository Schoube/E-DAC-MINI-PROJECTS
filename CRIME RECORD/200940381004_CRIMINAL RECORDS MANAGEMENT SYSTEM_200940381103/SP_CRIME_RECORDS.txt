use CrimeRecords;

delimiter ##
create procedure sp_cr_join()
begin 
select admin.*,accused.* from  admin inner join accused on admin.admin_id=accused.incharge_officer_id 
inner join complainant on accused.incharge_officer_id=complainant.incharge_officer_id;
end ##

call sp_cr_join();
show procedure status where name like '___c%';

delimiter ## C
create procedure sp_cr_CaseStatus(in case_number varchar(20))
begin
select case_status from accused where ACCUSED_CASE_NO=case_number; 
end ##

delimiter @@

create procedure sp_cr_AccusedInfo(in case_number varchar(15))
begin
select ACCUSED_CASE_NO,ACCUSED_NAME,ACCUSED_SECTION,INCHARGE_OFFICER_ID,NEXT_DATE,CASE_STATUS from accused where ACCUSED_CASE_NO=case_number; 
end @@

call sp_cr_AccusedInfo();
DROP PROCEDURE sp_cr_AccusedInfo;

-- TO CHECK HOW MANY CASES WITH ADMIN_ID
delimiter $$
create procedure sp_cr_AdminStatus(in adm_id int)
begin
select  ACCUSED_CASE_NO from accused where  INCHARGE_OFFICER_ID=adm_id group by ACCUSED_CASE_NO; 
end $$


-- delimiter %%
-- create procedure sp_cr_AdminAlottedCase(adminName varchar(50))
-- begin
-- select * from accused where admin_id in (select admin_id from admin where ADMIN_NAME=adminName);
-- end %%

delimiter ## C
create procedure sp_cr_CaseStatus(in case_number varchar(20))
begin
select case_status from accused where ACCUSED_CASE_NO=case_number; 
end ##
;

drop procedure  sp_cr_CaseStatus;
drop procedure  sp_cr_AdminAlottedCase;
drop procedure sp_cr_AdminStatus;


--  delimiter %%
-- create procedure sp_cr_AdminAlottedCase(adminName varchar(50))
-- begin
-- select ACCUSED_CASE_NO,COUNT(*) from accused where INCHARGE_OFFICER_ID in (select admin_id from admin where ADMIN_NAME=adminName);
-- end %%
