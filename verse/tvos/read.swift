
import UIKit
import TVMLKit

class TVMLViewController: UIViewController, TVApplicationControllerDelegate {

    private var containerView: UIView!

    var appController: TVApplicationController?

    override func viewDidLoad() {
        setUpTVMLAppController()
        setUpContainerView()
    }

    // MARK: - Private

    private func setUpContainerView() {
        guard let tvmlViewController = appController?.navigationController else { return }
        containerView = UIView()
        containerView.frame = view.bounds
        addChildViewController(tvmlViewController)
        view.addSubview(tvmlViewController.view)
    }

    // Create an instance of TVApplicationController, loading content
    // from a local file application.js included in the Application Bundle
    private func setUpTVMLAppController() {
        let appControllerContext = TVApplicationControllerContext()
        let appJS = Bundle.main.url(forResource: "application", withExtension: "js")

        if let javaScriptURL = appJS {
            appControllerContext.javaScriptApplicationURL = javaScriptURL
        }

        // Here is the magic. Setting nil to the window creates a deatached the application controller
        appController = TVApplicationController(context: appControllerContext,
                                                window: nil,
                                                delegate: self)
    }
}

https://developer.apple.com/documentation/tvmljs


var appController: TVApplicationController?
static let TVBaseURL = "http://localhost:9001/"
static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
  window = UIWindow(frame: UIScreen.main.bounds)

  // 1
  let appControllerContext = TVApplicationControllerContext()

  // 2
  guard let javaScriptURL = URL(string: AppDelegate.TVBootURL) else { fatalError("unable to create NSURL") }
  appControllerContext.javaScriptApplicationURL = javaScriptURL
  appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL

  // 3
  appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
  return true
}

application.js

App.onLaunch = function(options) {
  // 1
  var alert = createAlert("Hello World", ""); //leaving 2nd parameter with an empty string
  navigationDocument.presentModal(alert);
}

// 2
var createAlert = function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
      </alertTemplate>
    </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
}

Presenter.js:

var Presenter = {
  // 1
  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  // 2
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },

  // 3
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },
}


https://developer.apple.com/documentation/tvmljs/navigationdocument

App.onLaunch = function(options) {
  // 1
  var javascriptFiles = [
    `${options.BASEURL}js/Presenter.js`
  ];
  // 2
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      var alert = createAlert("Hello World!", "");
      Presenter.modalDialogPresenter(alert);
    } else {
      // 3 Handle the error CHALLENGE!//inside else statement of evaluateScripts.
    }
  });
}

load: function(event) {
  //1
  var self = this,
  ele = event.target,
  videoURL = ele.getAttribute("videoURL")
  if(videoURL) {
    //2
    var player = new Player();
    var playlist = new Playlist();
    var mediaItem = new MediaItem("video", videoURL);

    player.playlist = playlist;
    player.playlist.push(mediaItem);
    player.present();
  }
},

https://github.com/emadalam/atvjs
http://www.dcordero.me/swift/tvos/2018/06/07/extending-tvml-with-custom-templates.html
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    var window: UIWindow?

    var appController: TVApplicationController?

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -&gt; Bool {

        self.window = UIWindow(frame:UIScreen.mainScreen().bounds)

        let appControllerContext = TVApplicationControllerContext()

        if let javaScriptApplicationURL = NSURL(string: "http://localhost:8080/tv.js") {
            appControllerContext.javaScriptApplicationURL = javaScriptApplicationURL
            print("set javaScriptApplicationURL to  \(javaScriptApplicationURL)")
        }

        if let options = launchOptions {
            for (kind, value) in options {
                if let kindStr = kind as? String {
                    appControllerContext.launchOptions[kindStr] = value
                }
            }
        }

        self.appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)

        return true
    }
