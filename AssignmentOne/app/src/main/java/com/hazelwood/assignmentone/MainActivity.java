package com.hazelwood.assignmentone;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.ArrayList;


public class MainActivity extends Activity {
    ArrayList<Player> player;
    Spinner spinner;
    ListView listView;
    PlayerAdapter adapter;
    TextView name, points, assists, rebounds, blocks, steals;
    ImageView image;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_layout);

        LinearLayout layout = (LinearLayout)findViewById(R.id.layout);

        player = new ArrayList<Player>();
        player.add(new Player("Chris","Paul",18.6,9.9,2.4,4.4,0.1,R.drawable.chrispaul));
        player.add(new Player("James","Harden",18.0,5.4,4.6,8.6,0.5,R.drawable.jamesharden));
        player.add(new Player("Kevin","Durant",23.4,4.6,3.4,8.6,0.8,R.drawable.kevindurant));
        player.add(new Player("Tony","Parker",19.5,12.4,2.1,3.4,0.1,R.drawable.tonyparker));
        adapter = new PlayerAdapter(this, player);

        spinner = (Spinner)findViewById(R.id.spinnerPort);
        spinner.setAdapter(adapter);

        listView = (ListView)findViewById(R.id.list);
        listView.setAdapter(adapter);

        spinner.setOnItemSelectedListener(itemSelectClick);
        listView.setOnItemClickListener(itemClick);

        name = (TextView)findViewById(R.id.nameLabel);
        points = (TextView)findViewById(R.id.pointsLabel);
        assists = (TextView)findViewById(R.id.assistLabel);
        rebounds = (TextView)findViewById(R.id.reboundLabel);
        steals = (TextView)findViewById(R.id.stealLabel);
        blocks = (TextView)findViewById(R.id.blockLabel);
        image = (ImageView)findViewById(R.id.imageView2);

        if (getResources().getConfiguration().orientation ==
                Configuration.ORIENTATION_PORTRAIT) {

        } else {
            spinner.setVisibility(View.GONE);
            listView.setVisibility(View.VISIBLE);
            layout.setOrientation(LinearLayout.HORIZONTAL);
        }


    }

    AdapterView.OnItemClickListener itemClick = new AdapterView.OnItemClickListener() {
        @Override
        public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
            PlayerAdapter adapter = (PlayerAdapter)adapterView.getAdapter();
            Player clicked = adapter.getItem(i);

            points.setText(String.valueOf(clicked.points));
            assists.setText(String.valueOf(clicked.assists));
            name.setText(String.valueOf(clicked.name));
            rebounds.setText(String.valueOf(clicked.rebounds));
            blocks.setText(String.valueOf(clicked.blocks));
            steals.setText(String.valueOf(clicked.steals));
            image.setImageResource(clicked.image);

        }
    };

    AdapterView.OnItemSelectedListener itemSelectClick = new AdapterView.OnItemSelectedListener() {
        @Override
        public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
            PlayerAdapter adapter = (PlayerAdapter)adapterView.getAdapter();
            Player clicked = adapter.getItem(i);

            points.setText("PPG " + String.valueOf(clicked.points));
            assists.setText("AST " + String.valueOf(clicked.assists));
            name.setText(String.valueOf(clicked.name));
            rebounds.setText("REB " + String.valueOf(clicked.rebounds));
            blocks.setText("BLK " + String.valueOf(clicked.blocks));
            steals.setText("STL " + String.valueOf(clicked.steals));
            image.setImageResource(clicked.image);

        }

        @Override
        public void onNothingSelected(AdapterView<?> adapterView) {

        }
    };

}
