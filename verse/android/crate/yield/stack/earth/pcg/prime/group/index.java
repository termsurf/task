

public class Group extends ViewGroup {
  // default to same styles as plane.
}

group.addView(view)

OnHoverListener
OnSystemUiVisibilityChangeListener
OnUnhandledKeyEventListener
OnDragListener
OnCapturedPointerListener

System.nanoTime() (java)

    <supports-screens
        android:largeScreens="true"
        android:normalScreens="true"
        android:smallScreens="true"
        android:resizeable="true"
        android:anyDensity="true"
        />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.RECEIVE_SMS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />   
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />   
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.View;

public class DrawView extends View {
    Paint paint = new Paint();

    public DrawView(Context context) {
        super(context);            
    }

    @Override
    public void onDraw(Canvas canvas) {
        paint.setColor(Color.BLACK);
        paint.setStrokeWidth(3);
        canvas.drawRect(30, 30, 80, 80, paint);
        paint.setStrokeWidth(0);
        paint.setColor(Color.CYAN);
        canvas.drawRect(33, 60, 77, 77, paint );
        paint.setColor(Color.YELLOW);
        canvas.drawRect(33, 33, 77, 60, paint );

    }

}


package com.elyeproj.webappinteraction

import android.content.pm.ApplicationInfo
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import kotlinx.android.synthetic.main.activity_main.*

import java.io.IOException


yield_cloud_prose(prose) {

}

my_web_view.evaluateJavascript("javascript: sweep.cause_phone()", null)

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            if (0 != (applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE)) {
                WebView.setWebContentsDebuggingEnabled(true)
            }
        }

        my_web_view.settings.javaScriptEnabled = true
        my_web_view.addJavascriptInterface(JavaScriptInterface(), PHONE)
        my_web_view.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String) {
                if (url == BASE_URL) {
                    injectJavaScriptFunction()
                }
            }
        }
        my_web_view.loadUrl(BASE_URL)

        btn_send_to_web.setOnClickListener {
            my_web_view.evaluateJavascript("javascript: " +
                    "updateFromAndroid(\"" + edit_text_to_web.text + "\")", null)
        }
    }

    override fun onDestroy() {
        my_web_view.removeJavascriptInterface(PHONE)
        super.onDestroy()
    }

    private fun injectJavaScriptFunction() {
    }


    /**
     * Callback interface.
     */
    
    private inner class JavaScriptInterface {

        /**
         * Call to phone.
         */

        @JavascriptInterface
        fun cause_phone(block: String) {
            // txt_from_web.text = fromWeb
            handle(block)
        }

        /**
         * Call to browser.
         */

        @JavascriptInterface
        fun cause_verse(block: String) {
            handle(block)
        }
    }

    companion object {
        private val PHONE = "phone"
        private val BASE_URL = "file:///android_asset/webview.html"
    }
}


<uses-feature android:name="android.hardware.camera"
                  android:required="true" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 <uses-permission android:name="android.permission.INTERNET" />

static final int REQUEST_IMAGE_CAPTURE = 1;

private void dispatchTakePictureIntent() {
    Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
        startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
    }
}
    Uri uri = Uri.parse("https://www.example.com");
     Intent intent = new Intent(Intent.ACTION_VIEW, uri);
     startActivity(intent);
     
    See Intent for more information.

    To provide a WebView in your own Activity, include a <WebView> in your layout, or set the entire Activity window as a WebView during onCreate():

     WebView webview = new WebView(this);
     setContentView(webview);
     webview.loadUrl("https://example.com/");
