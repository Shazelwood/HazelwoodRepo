package com.hazelwood.assignmentone;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by Hazelwood on 8/18/14.
 */
public class PlayerAdapter extends BaseAdapter{
    private Context mContext;
    private ArrayList<Player> mObjects;
    private static final long ID_CONSTANT = 123456789;

    public PlayerAdapter(Context c, ArrayList<Player> objects){
        mContext = c;
        mObjects = objects;
    }

    @Override
    public int getCount() {
        return mObjects.size();
    }

    @Override
    public Player getItem(int position) {
        return mObjects.get(position);
    }

    @Override
    public long getItemId(int position) {
        return ID_CONSTANT + position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {


        if (convertView == null){
            convertView = LayoutInflater.from(mContext).inflate(R.layout.row_layout, parent, false);
        }
        Player item = getItem(position);
        ImageView imageView = (ImageView)convertView.findViewById(R.id.image);
        TextView textView = (TextView)convertView.findViewById(R.id.name);

        imageView.setImageResource(item.image);
        textView.setText(item.name);

        return convertView;
    }
}
