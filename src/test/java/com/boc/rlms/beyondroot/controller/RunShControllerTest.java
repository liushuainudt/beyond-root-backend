package com.boc.rlms.beyondroot.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RunShControllerTest {
    @Test
    public void testRunSh(){

        RunShController  runShController = new RunShController();

        String result = runShController.runSh(null);
        System.out.println(result);
    }
}
