# Crumborn

It doesn't mean anything, it's my homepage. Free from enterprise extravaganza 👍

TODO add docs foe this!

Issues

Problem 1
root: repl stuck in "Prompt will show when Figwheel connects to your application" when piggybacking nREPL
solution: 
    Not helping: rm -rf ~/.m2 && lein clean 
    Not helping: removing conf in user.clj dev argument to fig-start
    Not helping: running with rlwrap, rlwarp lein figwheel
    Not hepling: Adding figwheel.preload to preloads in dev profile.
    Not hepling: adding  :source-map           true to build
    Not helping: Removing   ;:source-paths ["src"] from dev and keeping it on top, you are not able to do that
    Not hepling: First running lein figwheel and waiting for for it to say its waiting
                    then, in another terminal, run lein repl
                    when this has loaded, run the remote REPLL in intelllej     
                    when this is connected, go to user.clj field and start cljs repl    
                    then it says "Figwheel System not initialized. Please start it with figwheel-sidecar.repl-api/start-figwheel!"
                    test start-figwheell!, it says it's already running cus it is...
                    quit fighweel process that you started first, and start it from intelllej again, now that started
                    now start cljs-repl
                    this just says the same thing...... Promp will show......
    Not hepling: run with debug flag:
                    export LEIN_JVM_OPTS='-Djavax.net.debug=true'
                    lein clean
                    lein figwheel
    SOUTION: Rolling back to clojurescript version 1.10.520 FROM 1.10.758, this actually works and the repl is not stuck in Prompt .....
    
Problem 2
root: repl is not seeing the latest changes in atoms


Problem 3
root: I think lein figwheel and cljsbuild is outdated, should we migrate to shadow-cljs?
Migration:
    1) create a deps.edn file
    2) run $ npm install --save-dev shadow-cljs
    3) npm init
    4) fix a shadow-cljs.edn file
    5) shadow-cljs watch app
    6) install all react stuff it's complaning about
    7) it should be running, fire up cursive and connect with nrepl
    8) once repl is up, type (shadow/repl :app) and rock and roll
    
Problem 4
root: No such namespace: js
solution: 
    first go to the browser window and reload it
    then in a cursive repl run:
    (shadow/watch :app)
    (shadow/repl :app) // :app is the id you are running from shadow-cljs.edn
    
    

