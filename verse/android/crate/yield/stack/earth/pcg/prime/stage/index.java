
package earth.pcg.prime;

import android.app.Activity;
import android.os.Bundle;

public class Stage extends ActionBarActivity implements View.OnClickListener {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Capture our button from layout
        Button button = (Button)findViewById(R.id.corky);
        Button button2 = (Button)findViewById(R.id.corky2);
        Button button3 = (Button)findViewById(R.id.corky3);
        // Register the onClick listener with the implementation above
        button.setOnClickListener(this);
        button2.setOnClickListener(this);
        button3.setOnClickListener(this);
        button.setOnLongClickListener(this)
        button.setOnFocusChangeListener(this)
        button.setOnKeyListener(this)
        button.setOnTouchListener(this)
        button.setnCreateContextMenuListener(this)
        onKeyDown(int, KeyEvent) - Called when a new key event occurs.
onKeyUp(int, KeyEvent) - Called when a key up event occurs.
onTrackballEvent(MotionEvent) - Called when a trackball motion event occurs.
onTouchEvent(MotionEvent) - Called when a touch screen motion event occurs.
onFocusChanged(boolean, int, Rect) - Called when the view gains or loses focus.
    private void onClick() {

    }
    
    private void onClick() {

    }
    
    private void onClick() {

    }
    
    private void onLongClick() {

    }
    
    private void onFocusChange() {

    }
    
    private void onKey() {

    }
    
    private void onTouch() {

    }
    
@Override
public boolean onKeyUp(int keyCode, KeyEvent event) {
    switch (keyCode) {
        ...
        case KeyEvent.KEYCODE_J:

@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
// TODO Auto-generated method stub
     if (i == KeyEvent.KEYCODE_BACK) {
          //back button key down
     }
return super.onKeyDown(keyCode, event);
}
@Override
public boolean onKeyUp(int keyCode, KeyEvent event) {
// TODO Auto-generated method stub
      if (i == KeyEvent.KEYCODE_BACK) {
          //back button key up
      }
return super.onKeyUp(keyCode, event);
}

    }

    @Override
    public void onClick(View v) {

        // So we will make
        switch (v.getId() /*to get clicked view id**/) {
            case R.id.corky:

https://stackoverflow.com/questions/29479647/android-setonclicklistener-vs-onclicklistener-vs-view-onclicklistener
