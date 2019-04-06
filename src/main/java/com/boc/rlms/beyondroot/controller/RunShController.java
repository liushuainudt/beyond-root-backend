package com.boc.rlms.beyondroot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

@RestController
public class RunShController {

    private final static Logger logger = LoggerFactory.getLogger(RunShController.class);

    /**
     * @param cmd: java -jar ProcessJar.jar or /home/destino/workspace/JavaProject/listing.sh
     * @return
     */
    @CrossOrigin(origins = "http://localhost:8888")
    @RequestMapping(value = "/runsh", produces = "text/plain;charset=UTF-8")
    public String runSh(@RequestParam(value = "cmd", defaultValue = "ls -ltr /") String cmd) {
        StringBuffer lines = new StringBuffer();
        StringBuffer errorLines = new StringBuffer();

        if (cmd == null)
            cmd = "ls -ltr /";

        //cmd = cmd.replace("@"," ");

        logger.info("cmd to run: " + cmd);

        try {
            //Process process = Runtime.getRuntime().exec("java -jar ProcessJar.jar args1 agrs2 args3");
            Process process = Runtime.getRuntime().exec(cmd);
            InputStream is = process.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is, Charset.forName("gbk")));

            BufferedReader stdError = new BufferedReader(new InputStreamReader(process.getErrorStream(), Charset.forName("gbk")));

            String line;
            while ((line = br.readLine()) != null) {
                lines.append(line);
                lines.append("\n");
            }

            if (!StringUtils.isEmpty(lines.toString())) {
                logger.info(lines.toString());
                return lines.toString();
            }

            while ((line = stdError.readLine()) != null) {
                errorLines.append(line);
                lines.append("\n");
            }

            if (!StringUtils.isEmpty(errorLines.toString())) {
                logger.error(errorLines.toString());
                return errorLines.toString();
            }


            int exitCode = process.waitFor();

            logger.info("exitCode: ", exitCode);
        } catch (IOException e) {
            logger.error(e.getMessage());
            return e.getMessage();
        } catch (InterruptedException e) {
            logger.error(e.getMessage());
            return e.getMessage();
        }

        return lines.toString();
    }


}
