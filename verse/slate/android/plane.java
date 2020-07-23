
https://github.com/phishman3579/android-heart-rate-monitor/blob/master/src/com/jwetherell/heart_rate_monitor/HeartRateMonitor.java
https://developer.android.com/training/graphics/opengl/touch

public class MyActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Button changeColor = new Button(this);
        changeColor.setText("Color");
        changeColor.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));

        changeColor.setOnClickListener(new View.OnClickListener() {
            int[] colors = {Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW};
            @Override
            public void onClick(View view) {
                final Random random = new Random();
                view.setBackgroundColor(colors[random.nextInt(colors.length - 1) + 1]);
            }
        });
        setContentView(changeColor);
    }

https://github.com/pocorall/scaloid/wiki/UI-Layout-without-XML
https://medium.com/@authmane512/how-to-build-an-apk-from-command-line-without-ide-7260e1e22676
