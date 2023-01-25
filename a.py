""" 헝그리앱 우마무스메 캐릭터 이미지 저장 코드 """
# import urllib.request

# for i in range(1, 47):
#     filename = "{:03d}gacha.png".format(i)
#     url = "https://appdata.hungryapp.co.kr/images/dbimg/umamusume/icon/"+filename
#     urllib.request.urlretrieve(url, filename)

""" 인벤 우마무스메 이름, 별명, 등급 출력 코드 """
# from bs4 import BeautifulSoup
# import requests

# url = 'https://uma.inven.co.kr/db/chara/'
# response = requests.get(url)
# html = response.text
# soup = BeautifulSoup(html, 'html.parser')
# chara = soup.find_all('tbody')[1].find_all('tr')
# # format
# # ["001","1","[스트레이트 라인]","메지로 라이언"],
# for idx in range(len(chara)):
#     print([
#         f"{idx+1:03d}", # 번호
#         chara[-1-idx].find('span')['class'][1][-1], # 등급
#         chara[-1-idx].find('span', {'class': 'charactertitle'}).text, # 별명
#         chara[-1-idx].find('span', {'class': 'charactername'}).text, # 우마무스메 이름
#     ], end=',\n')