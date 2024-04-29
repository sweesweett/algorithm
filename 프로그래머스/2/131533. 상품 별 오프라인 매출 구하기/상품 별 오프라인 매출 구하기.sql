SELECT A.PRODUCT_CODE,(A.PRICE*SUM(B.SALES_AMOUNT)) SALES
FROM PRODUCT A JOIN  OFFLINE_SALE B ON A.PRODUCT_ID=B.PRODUCT_ID
GROUP BY PRODUCT_CODE
ORDER BY SALES DESC, A.PRODUCT_CODE ASC
