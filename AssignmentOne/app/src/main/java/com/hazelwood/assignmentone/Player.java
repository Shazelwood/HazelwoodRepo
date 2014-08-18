package com.hazelwood.assignmentone;

/**
 * Created by Hazelwood on 8/12/14.
 */
public class Player
{
    public String name;
    public double points, assists, blocks, steals, rebounds;
    public int image;

    public Player(String _Fname, String _Lname, double ppg, double ast, double stl, double reb, double blk,   int img)
    {
        name = _Fname + " " + _Lname;
        points = ppg;
        assists = ast;
        blocks = blk;
        steals = stl;
        rebounds = reb;
        image = img;
    }

}
