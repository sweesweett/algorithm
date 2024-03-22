-- 코드를 작성해주세요
SELECT ID,EMAIL,FIRST_NAME,LAST_NAME FROM DEVELOPER_INFOS
WHERE 'Python' IN (SKILL_1,SKILL_2,SKILL_3)
ORDER BY ID ASC
# 조회하고자 하는 데이터 값이 여러 개일 때 사용.
#사용할 때 'Python' IN (SKILL_1,SKILL_2,SKILL_3) 이런식이나
# 값이 (LIST) 안에 해당하는 것 COSTS IN (12000,30000,45000) 이런식으로 작성 할 수 있다!
