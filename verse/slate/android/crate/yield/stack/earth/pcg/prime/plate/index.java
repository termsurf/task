
public final class Plate {
  public static ArrayList<Integer> space = new ArrayList<Integer>()
  public static ArrayList<Plane> plane_space = new ArrayList<Plane>()

  private Plate() {

  }

  public static int pluck_count(int start, int clear) {
    return (new Random()).nextInt((clear - start) + 1) + start;
  }

  public static void print(String chord) {
    Log.i("myTag", "This is my message")
  }

  public static Calendar fetch_clock_stamp() {
    return Calendar.getInstance()
  }

  public static Path build_curve() {
    path = new Path();
    paint.setColor(Color.RED);
    paint.setStrokeWidth(3);
    path.moveTo(34, 259);
    path.cubicTo(68, 151, 286, 350, 336, 252);
    canvas.drawPath(path, paint);
    
    path = new Path();
    paint.setColor(Color.RED);
    paint.setStrokeWidth(3);
    path.moveTo(50, 50);
    path.cubicTo(300, 50, 100, 400, 400, 400);
    canvas.drawPath(path, paint);
    
    path.reset();
    paint.setColor(Color.GRAY);
    paint.setStrokeWidth(1);
    path.moveTo(50, 50);
    path.lineTo(300, 50);
    path.lineTo(100, 400);
    path.lineTo(400, 400);
    
    canvas.drawPath(path, paint)
  }

  public static Plane build_plane() {
    plane = new Plane();
  }

  public static Group build_group() {

  }

  public static Point build_point() {

  }

  public static void spawn_cloud() {
    RequestQueue queue = Volley.newRequestQueue(this);
    String url ="http://www.google.com";

    // Request a string response from the provided URL.
    StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
        @Override
        public void onResponse(String response) {
            // Display the first 500 characters of the response string.
            mTextView.setText("Response is: "+ response.substring(0,500));
        }
    }, new Response.ErrorListener() {
        @Override
        public void onErrorResponse(VolleyError error) {
            mTextView.setText("That didn't work!");
        }
    });

    // Add the request to the RequestQueue.
    queue.add(stringRequest);

    URL url = new URL("http://[ip]:[port]"); //in the real code, there is an ip and a port
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("POST");
    conn.setRequestProperty("Content-Type", "application/json");
    conn.setRequestProperty("Accept","application/json");
    conn.setDoOutput(true);
    conn.setDoInput(true);
    conn.connect();

    JSONObject jsonParam = new JSONObject();
    jsonParam.put("uname", params[0].getUser());
    jsonParam.put("message", params[0].getMessage());
    jsonParam.put("latitude", "0");
    jsonParam.put("longitude", "0");
    jsonParam.put("id", "1");


    DataOutputStream os = new DataOutputStream(conn.getOutputStream());
    os.writeBytes(URLEncoder.encode(jsonParam.toString(), "UTF-8"));

    os.flush();
    os.close();

    Log.i("STATUS", String.valueOf(conn.getResponseCode()));
    Log.i("MSG" , conn.getResponseMessage());

    conn.disconnect();

            JSONObject json = new JSONObject();
            json.put("protocolVersion", "1.0");
            json.put("emailAddress", emailAddress);
            json.put("data", data);
            String jsonString = json.toString();

            HttpPost request = new HttpPost(serviceURLString);
            request.setHeader("Accept", "application/json");
            request.setHeader("Content-type", "application/json");
            request.setEntity(new StringEntity(jsonString));
            
            return request;
  }
}

// Instantiate the cache
Cache cache = new DiskBasedCache(getCacheDir(), 1024 * 1024); // 1MB cap

// Set up the network to use HttpURLConnection as the HTTP client.
Network network = new BasicNetwork(new HurlStack());

// Instantiate the RequestQueue with the cache and network.
mRequestQueue = new RequestQueue(cache, network);

// Start the queue
mRequestQueue.start();

String url ="http://www.example.com";
