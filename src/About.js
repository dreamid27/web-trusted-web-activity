import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <p style={{ textAlign: "left", padding: "10px" }}>
        Source:{" "}
        <a href="https://developer.chrome.com/docs/android/trusted-web-activity/overview/">
          Developer Chrome
        </a>
        <br />
        <br />
        <br />
        Trusted Web Activity is a new way to open your web-app content such as
        your Progressive Web App (PWA) from your Android app using a protocol
        based on Custom Tabs. Note: Trusted Web Activity is available in Chrome
        on Android, version 72 and above. Looking for the code?
        android-browser-helper library on GitHub Trusted Web Activity demos
        Bubblewrap, a NodeJs library / CLI to generate and build Trusted Web
        Activity projects There are a few things that make Trusted Web Activity
        different from other ways to open web content from your Android app:
        Content in a Trusted Web activity is trusted -- the app and the site it
        opens are expected to come from the same developer. (This is verified
        using Digital Asset Links.) The content rendered in a Trusted Web
        Activity comes from the web: they're rendered by the user's browser, in
        exactly the same way as a user would see it in their browser except they
        are run fullscreen. Web content should be accessible and useful in the
        browser first. Browsers are also updated independent of Android and your
        app -- Chrome, for example, is available back to Android Jelly Bean.
        That saves on APK size and ensures you can use a modern web runtime.
        (Note that since Lollipop, WebView has also been updated independent of
        Android, but there are a significant number of pre-Lollipop Android
        users.) The host app doesn't have direct access to web content in a
        Trusted Web Activity or any other kind of web state, like cookies and
        localStorage. Nevertheless, you can coordinate with the web content by
        passing data to and from the page in URLs (e.g. through query parameters
        and intent URIs.) Transitions between web and native content are between
        activities. Each activity (i.e. screen) of your app is either completely
        provided by the web, or by an Android activity To make it easier to
        test, there are currently no qualifications for content opened in the
        preview of Trusted Web activities. You can expect, however, that Trusted
        Web activities will need to meet the same Add to Home Screen
        requirements. You can audit your site for these requirements using the
        Lighthouse "user can be prompted to Add to Home screen" audit.
        <br />
        <br />
        <br />
        <a href="https://developer.chrome.com/docs/android/trusted-web-activity/overview/">
          Read More
        </a>
      </p>
    </div>
  );
}

export default App;
