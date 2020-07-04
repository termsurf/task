
    motionManager.startAccelerometerUpdates()
    motionManager.startGyroUpdates()
    motionManager.startMagnetometerUpdates()
    motionManager.startDeviceMotionUpdates()

if let accelerometerData = motionManager.accelerometerData {
      print(accelerometerData)
    }
    if let gyroData = motionManager.gyroData {
      print(gyroData)
    }
    if let magnetometerData = motionManager.magnetometerData {
      print(magnetometerData)
    }
    if let deviceMotion = motionManager.deviceMotion {
      print(deviceMotion)
    }
//   static func start_force_watch() {
//     force_guide.startAccelerometerUpdates()
//   }

//   static func clear_force_watch() {
//     force_guide.stopAccelerometerUpdates()
//   }

//   static func fetch_force_yield() {
//     return force_guide.accelerometerData
//   }

//   /**
//    * Turn on flashlight.
//    */

//   static func start_light() {
//     let device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
//     if (!device.hasTorch) return
//     do {
//       try device.lockForConfiguration()
//       if (device.torchMode != AVCaptureTorchMode.On) {
//         do {
//           try device.setTorchModeOnWithLevel(1.0)
//         } catch {
//           print(error)
//         }
//       }
//       device.unlockForConfiguration()
//     } catch {
//       print(error)
//     }
//   }

//   /**
//    * Turn off flashlight.
//    */

//   static func clear_light() {
//     let device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
//     if (!device.hasTorch) return
//     do {
//       try device.lockForConfiguration()
//       if (device.torchMode == AVCaptureTorchMode.On) {
//         device.torchMode = AVCaptureTorchMode.Off
//       }
//       device.unlockForConfiguration()
//     } catch {
//       print(error)
//     }
//   }

import CoreMotion
  static var force_guide: CMMotionManager!// = CMMotionManager()
func spawn() {

//   /**
//    * Vibrate phone.
//    */

//   static func pulse() {
//     AudioServicesPlayAlertSound(SystemSoundID(kSystemSoundID_Vibrate))
//   }
  // let task = NSTask()
  // task.launchPath = "/bin/sh"
  // task.arguments = ["-c", "echo 1 ; sleep 1 ; echo 2 ; sleep 1 ; echo 3 ; sleep 1 ; echo 4"]

  // let pipe = NSPipe()
  // task.standardOutput = pipe
  // let outHandle = pipe.fileHandleForReading
  // outHandle.waitForDataInBackgroundAndNotify()

  // var obs1 : NSObjectProtocol!
  // obs1 = NSNotificationCenter.defaultCenter().addObserverForName(NSFileHandleDataAvailableNotification,
  //     object: outHandle, queue: nil) {  notification -> Void in
  //         let data = outHandle.availableData
  //         if data.length > 0 {
  //             if let str = NSString(data: data, encoding: NSUTF8StringEncoding) {
  //                 print("got output: \(str)")
  //             }
  //             outHandle.waitForDataInBackgroundAndNotify()
  //         } else {
  //             print("EOF on stdout from process")
  //             NSNotificationCenter.defaultCenter().removeObserver(obs1)
  //         }
  // }

  // var obs2 : NSObjectProtocol!
  // obs2 = NSNotificationCenter.defaultCenter().addObserverForName(NSTaskDidTerminateNotification,
  //     object: task, queue: nil) { notification -> Void in
  //         print("terminated")
  //         NSNotificationCenter.defaultCenter().removeObserver(obs2)
  // }

  // task.launch()
}

  var space: EdgeInsets {
    get {
      if let layer = self.layer {
        return self.layoutMargins
      }
    }
    set (space) {
      layoutMargins = space;
    }
  }

  var space: UIEdgeInsets {
    get { return layer?.backgroundColor; }
    set (space) {
      layoutMargins = space;
    }
  }


/**
 * Open camera.
 */

static func bring_flash() {
  if UIImagePickerController.isSourceTypeAvailable(.camera) {
    var imagePicker = UIImagePickerController()
    imagePicker.delegate = self
    imagePicker.sourceType = .camera;
    imagePicker.allowsEditing = false
    self.presentViewController(imagePicker, animated: true, completion: nil)
  }
}

/**
 * Open photo library.
 */

static func fetch_flash_stash() {
  if UIImagePickerController.isSourceTypeAvailable(.photoLibrary) {
    var imagePicker = UIImagePickerController()
    imagePicker.delegate = self
    imagePicker.sourceType = .photoLibrary;
    imagePicker.allowsEditing = true
    self.presentViewController(imagePicker, animated: true, completion: nil)
  }
}

func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : AnyObject]) {
  let image = info[UIImagePickerControllerOriginalImage] as! UIImage
  imagePicked.image = image
  dismiss(animated:true, completion: nil)
}

/**
 * Save photo to library.
 */

func stash_flash(sender: AnyObject) {
  var imageData = UIImageJPEGRepresentation(imagePicked.image, 0.6)
  var compressedJPGImage = UIImage(data: imageData)
  UIImageWriteToSavedPhotosAlbum(compressedJPGImage, nil, nil, nil)

  var alert = UIAlertView(title: "Wow",
      message: "Your image has been saved to Photo Library!",
      delegate: nil,
      cancelButtonTitle: "Ok")
  alert.show()
}

override func viewDidLoad() {
  super.viewDidLoad()

  let swipeRight = UISwipeGestureRecognizer(target: self, action: #selector(self.respondToSwipeGesture))
  swipeRight.direction = UISwipeGestureRecognizerDirection.right
  self.view.addGestureRecognizer(swipeRight)

  let swipeDown = UISwipeGestureRecognizer(target: self, action: #selector(self.respondToSwipeGesture))
  swipeDown.direction = UISwipeGestureRecognizerDirection.down
  self.view.addGestureRecognizer(swipeDown)

  var rotateRecognizer = UIRotationGestureRecognizer(target: self, action: "handleRotate:")
  var pinchRecognizer = UIPinchGestureRecognizer(target: self, action: "handlePinch:")

  testV.addGestureRecognizer(rotateRecognizer)
  testV.addGestureRecognizer(pinchRecognizer)

  let gestureRecognizer = UIPanGestureRecognizer(target: self, action: #selector(handlePan))
  self.someDraggableView.addGestureRecognizer(gestureRecognizer)
}

func respondToSwipeGesture(gesture: UIGestureRecognizer) {
  if let swipeGesture = gesture as? UISwipeGestureRecognizer {
    switch swipeGesture.direction {
    case UISwipeGestureRecognizerDirection.right:
      print("Swiped right")
    case UISwipeGestureRecognizerDirection.down:
      print("Swiped down")
    case UISwipeGestureRecognizerDirection.left:
      print("Swiped left")
    case UISwipeGestureRecognizerDirection.up:
      print("Swiped up")
    default:
      break
    }
  }
}

@IBAction func handlePan(_ gestureRecognizer: UIPanGestureRecognizer) {
  if gestureRecognizer.state == .began || gestureRecognizer.state == .changed {

    let translation = gestureRecognizer.translation(in: self.view)
    // note: 'view' is optional and need to be unwrapped
    gestureRecognizer.view!.center = CGPoint(x: gestureRecognizer.view!.center.x + translation.x, y: gestureRecognizer.view!.center.y + translation.y)
    gestureRecognizer.setTranslation(CGPoint.zero, in: self.view)
  }
}

let cameraAuthorizationStatus = AVCaptureDevice.authorizationStatus(for: .video)

switch cameraAuthorizationStatus {
case .notDetermined: requestCameraPermission()
case .authorized: presentCamera()
case .restricted, .denied: alertCameraAccessNeeded()
}

func requestCameraPermission() {
    AVCaptureDevice.requestAccess(for: .video, completionHandler: {accessGranted in
        guard accessGranted == true else { return }
        self.presentCamera()
    })
}

func presentCamera() {
    let photoPicker = UIImagePickerController()
    photoPicker.sourceType = .camera
    photoPicker.delegate = self as? UIImagePickerControllerDelegate & UINavigationControllerDelegate

    self.present(photoPicker, animated: true, completion: nil)
}

func alertCameraAccessNeeded() {
    let settingsAppURL = URL(string: UIApplicationOpenSettingsURLString)!

    let alert = UIAlertController(
        title: "Need Camera Access",
        message: "Camera access is required to make full use of this app.",
        preferredStyle: UIAlertControllerStyle.alert
    )

    alert.addAction(UIAlertAction(title: "Cancel", style: .default, handler: nil))
    alert.addAction(UIAlertAction(title: "Allow Camera", style: .cancel, handler: { (alert) -> Void in
        UIApplication.shared.open(settingsAppURL, options: [:], completionHandler: nil)
    }))

    present(alert, animated: true, completion: nil)
}

https://github.com/aryaxt/iOS-Rich-Text-Editor/blob/master/RichTextEditor/Source/RichTextEditor.m

/**
 * Call phone number.
 */

yield_phone() {
  guard let number = URL(string: "tel://" + number) else { return }
  UIApplication.shared.open(number)
}
