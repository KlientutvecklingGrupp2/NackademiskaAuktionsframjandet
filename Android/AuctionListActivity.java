package com.example.oscar.nackademiskaauktionsframjandet;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Base64;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.Blob;
import java.util.ArrayList;

public class AuctionListActivity extends AppCompatActivity {
    String auctionDetailString = new String("");
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_auction_list);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        final RequestQueue queue = Volley.newRequestQueue(this);
        final int auctionID = getIntent().getIntExtra("auctionId", 0);
        final ArrayList<Category> categoryArrayList = new ArrayList<Category>();
        final ArrayList<Supplier> supplierArrayList = new ArrayList<Supplier>();


        JsonArrayRequest jsCategoryArrayRequest = new JsonArrayRequest
                (Request.Method.GET, "http://nackademiska.azurewebsites.net/2/getcategories", null, new Response.Listener<JSONArray>() {

                    @Override
                    public void onResponse(JSONArray response) {

                        try {
                            for (int i = 0; i < response.length(); i++) {
                                JSONObject j = response.getJSONObject(i);

                                Category a = new Category();
                                a.Id = j.getInt("Id");
                                a.Name = j.getString("Name");
                                categoryArrayList.add(a);
                            }

                            JsonArrayRequest jsSupplierArrayRequest = new JsonArrayRequest
                                    (Request.Method.GET, "http://nackademiska.azurewebsites.net/2/getsuppliers", null, new Response.Listener<JSONArray>() {

                                        @Override
                                        public void onResponse(JSONArray response) {

                                            try {
                                                for (int i = 0; i < response.length(); i++) {
                                                    JSONObject j = response.getJSONObject(i);

                                                    Supplier s = new Supplier();
                                                    s.Id = j.getInt("Id");
                                                    s.Name = j.getString("Name");
                                                    supplierArrayList.add(s);
                                                }

                                                JsonObjectRequest jsObjectRequest = new JsonObjectRequest
                                                        (Request.Method.GET, "http://nackademiska.azurewebsites.net/2/getauctiondetails?auctionid=" + auctionID, null, new Response.Listener<JSONObject>() {

                                                            @Override
                                                            public void onResponse(JSONObject response) {

                                                                try {
                                                                    JSONObject j = response;
                                                                    TextView textView = (TextView) findViewById(R.id.textView);
                                                                    ImageView imageView = (ImageView) findViewById(R.id.imageView);

                                                                    byte[] decodedString = Base64.decode(j.getString("Image"), Base64.DEFAULT);
                                                                    Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);

                                                                    if (imageView != null) {
                                                                        imageView.setImageBitmap(decodedByte);
                                                                    }

                                                                    String currentCategoryName = new String("Stefan");
                                                                    for (Category value : categoryArrayList) {
                                                                        if (value.Id == j.getInt("CategoryId")) {
                                                                            currentCategoryName = value.Name;
                                                                        }
                                                                    }

                                                                    String currentSupplierName = new String("Stefan");
                                                                    for (Supplier value : supplierArrayList) {
                                                                        if (value.Id == j.getInt("SupplierId")) {
                                                                            currentSupplierName = value.Name;
                                                                        }
                                                                    }
                                                                    String soldString = "Nej";
                                                                    if (j.getBoolean("Sold")) {soldString = "Ja";}

                                                                    auctionDetailString = "Auktions ID: " + j.getInt("Id") + "\n" +
                                                                            "Namn: " + j.getString("Name") + "\n" +
                                                                            "Beskrivning: " + j.getString("Description") + "\n" +
                                                                            "StartDatum: " + j.getString("StartTime") + "\n" +
                                                                            "Slutdatum: " + j.getString("EndTime") + "\n" +
                                                                            "CategoryId: " + currentCategoryName + "\n" +
                                                                            "Leverantör: " + currentSupplierName + "\n" +
                                                                            "Acceptpris: " + j.getInt("AcceptPrice") + "\n" +
                                                                            "Såld: " + soldString;

                                                                    textView.setText(auctionDetailString);

                                                                } catch (JSONException e) {
                                                                }
                                                            }
                                                        }, new Response.ErrorListener() {

                                                            @Override
                                                            public void onErrorResponse(VolleyError error) {
                                                                // TODO Auto-generated method stub

                                                            }
                                                        });

                                                queue.add(jsObjectRequest);

                                            } catch (JSONException e) {
                                            }
                                        }
                                    }, new Response.ErrorListener() {

                                        @Override
                                        public void onErrorResponse(VolleyError error) {
                                            // TODO Auto-generated method stub

                                        }
                                    });
                            queue.add(jsSupplierArrayRequest);

                        } catch (JSONException e) {
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO Auto-generated method stub

                    }
                });
        queue.add(jsCategoryArrayRequest);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                //        .setAction("Action", null).show();

                Intent sendMail = new Intent(Intent.ACTION_SEND);
                sendMail.setType("text/mail");
                //sendMail.putExtra(Intent.EXTRA_EMAIL, new String[] {"jonas.kjellin@nackademin.se"});
                sendMail.putExtra(Intent.EXTRA_SUBJECT, "Spännande Auktionsobjekt!");
                sendMail.putExtra(Intent.EXTRA_TEXT, "Hej.\nKolla in det här häftiga auktionsobjektet!\n\nhttp://gunnarsauktionssida.azurewebsites.net\n\n" + auctionDetailString);

                startActivity(Intent.createChooser(sendMail, "Välj epostprogram:"));

            }
        });
    }

}
