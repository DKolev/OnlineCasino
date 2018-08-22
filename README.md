# MOBILE ASSESSMENT AT MANSION

## TASK #1: RESPONSIVE APP - CREATE A RESPONSIVE MOBILE APP

* Task received: <b>10 of August</b>
* Task started: <b>13 of August</b> (after the follow up e-mail and questions)
* Self-appointed ETA: <b>10 days</b>
* Final project submitted: <b>22 of August</b>

In general, it was very interesting and learning experience for me to try and finish this task using <b>React Native</b> considering I wasn’t familiar with it.

I started with reading the official documentation which suggested to use <b>“Create React Native App”</b> as the easiest way to start. I already had installed <b>ATOM</b> text editor with a great built in Git functionallity so I used it.

For the first 2 days I played with some code samples, got myself around the project structure and how everything works – starting and debugging the app on my <b>Nexus 5X</b>. 
Then I started thinking about a way to implement the requirements like parsing the JSON data and how to display it, TabLayout, responsive design and WebView. Here is the list of the external libraries I used in this project:
* `"react-native-responsive-screen": "^1.1.7"`
This one I actually found reading a great tutorial on Medium: https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23  
So I followed the suggestions and steps to make the app responsive on different screen sizes as well as in Landscape Mode (tested it on my <b>Nexus 5X</b> and <b>Nexus 7</b> tablet). 
I’m not sure if this is the right way to do it but for the moment I’m familiar with how to do this for an Android app (keeping all image assets in their corresponding folders like drawable-hdpi, drawable-xhdpi and etc. and making different layouts for phones and tablets using layout-sw600dp folder for example)

* `"react-navigation": "^2.11.2"`
From this one I used `createMaterialTopTabNavigator` which actually came with very useful gesture-based navigation between the screens already built-in (exactly what was required)

After that, I moved everything I had already done to a new project but this time I created it with support for Native Code and the idea that I need to import the project to Android Studio in order to generate an apk file. Here I stumbled across a couple of issues with some of the dependencies versions and other problems until finally the project was built successful. The structure here looks a little bit different than what I’m used to, so I didn’t touch anything except generating the apk file with the Gradle task `assembleDebug`.
<b>You can find the APK in the android folder.</b>

I tried to add as much comments as possible in my code so that everything is well documented and easy to follow.

When I finished the core functionality of the app, I played a little bit with changing the colors of the app to be like the black background color and orange text in the site (casino.com). 

