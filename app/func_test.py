from selenium import webdriver
import unittest

def unitTestDocStr(fn):
    def wrap(fn, *args, **kwargs):
        return fn(fn, *args, **kwargs)
    return wrap

class AnonUserTest(unittest.TestCase):

    def setUp(self):
        self.TEST_URL = 'http://localhost:9000'
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_create_new_workout_program_and_retrieve_it_later(self):
        ## anon checks out new workout helper app
        self.browser.get(self.TEST_URL)

        ## Upon opening the browser, anon should see this
        self.assertIn('Lagas', self.browser.title)
        self.fail('Continue with adding more tests')
        
        ## on the main page, anon should see four textboxes, one for workout name
        ## one for max target weight and one rep range, one more for repetitions
        
        ## on the target weight textbox, there should be a dropdown beside it
        ## which has choices between Kg and Lbs.
        
        ## anon types "benchpress", "130", "6-12", "4"
        
        ## when anon hits return key, the page updates its "workout list" with
        ## benchpress 130 6 1st set
        ## benchpress 120 8 2nd set
        ## benchpress 110 10 3rd set
        ## benchpress 100 12 4th set
        
        ## anon is again invited to add more workouts
        ## anon types "incline benchpress", "120", "6-12", "4"
        
        ## when anon hits return key, the page again updates its "workout list" with
        ## incline benchpress 130 6 1st set
        ## incline benchpress 120 8 2nd set
        ## incline benchpress 110 10 3rd set
        ## incline benchpress 100 12 4th set
        
        ## on the 12th workout exercise, color of message for adding 
        ## new workout should turn to orange
        
        ## on every update of th workout list, the app generates a new, unique URL
        ## which "remembers" what anon entered
        
        ## on the 15th workout exercise, color of the message for adding 
        ## new workout should be reddish
        
        ## anon leaves the app

if __name__ == "__main__":
    unittest.main(warnings='ignore')
