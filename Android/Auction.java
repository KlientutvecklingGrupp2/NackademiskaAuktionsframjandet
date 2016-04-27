package com.example.oscar.nackademiskaauktionsframjandet;

import java.sql.Blob;
import java.sql.Date;

/**
 * Created by Oscar on 2016-03-21.
 */
public class Auction {
    int Id;
    String Name;
    String Description;
    String StartTime;
    String EndTime;
    String Image;
    int CategoryId;
    int SupplierId;
    int AcceptPrice;
    boolean Sold;

    @Override
    public String toString() {
        return "Id: " + Id + " Name: " +Name;
    }
}
