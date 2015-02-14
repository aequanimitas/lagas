from selenium import webdriver

TEST_URL = 'http://localhost:9000'

browser = webdriver.Firefox()
browser.get(TEST_URL)

assert 'Lagas' in browser.title
