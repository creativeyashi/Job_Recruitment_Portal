package com.codility.tasks.solution;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import sun.reflect.generics.reflectiveObjects.NotImplementedException;

interface TimeProvider {
    long getMillis();
}

public class CachingDataStructure {

    private int maxSize;
    private TimeProvider timeProvider;
    Map<String,String>mp = null;
    CachingDataStructure(TimeProvider timeProvider, int maxSize) {
        this.timeProvider = timeProvider;
        this.maxSize = maxSize;
    }

    public void put(String key, String value, long timeToLeaveInMilliseconds) {

        if(value=="NULL"){
            throw new IllegalArgumentException();
        }
        mp.put(key,value);

    }

    public Optional<String> get(String key) {
        String ans=mp.get(key);
        return Optional.ofNullable(ans);
    }

    public int size() {
        int s=mp.size();
        if(s!=0){
            return mp.size();
        }
        return 0;
    }

}
