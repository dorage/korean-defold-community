Q: Is Defold really free? 
A: Yes, the Defold engine and editor with full functionality is completely free of charge. No hidden costs, fees or royalties. Just free.

Q: Why on earth would the Defold Foundation give Defold away? 
A: One of the objectives of the Defold Foundation is to make sure that the Defold software is available to developers world-wide and that the source code is available free of charge.

Q: How long will you support Defold? 
A: We are deeply committed to Defold. The Defold Foundation has been set up in such a way that it is guaranteed to exist as a responsible owner for Defold for many years to come. It is not going away.

Q: Can I trust Defold for professional development? 
A: Absolutely. Defold is used by a growing number of professional game developers and game studios. Check out the games showcase for examples of games created using Defold.

Q: What kind of user tracking are you doing? 
A: We log anonymous usage data from our websites and the Defold editor in order to improve our services and product. There is no user tracking in the games you create (unless you add an analytics service yourself). Read more about this in our Privacy Policy.

Q: Who made Defold? 
A: Defold was created by Ragnar Svensson and Christian Murray. They started working on the engine, editor and servers in 2009. King and Defold started a partnership in 2013 and King acquired Defold in 2014. Read the full story here.

Game development questions 
Q: Can I do 3D games in Defold? 
A: Absolutely! The engine is a full blown 3D engine. However, the toolset is made for 2D so you will have to do a lot of heavy lifting yourself. Better 3D support is planned.

Programming language questions 
Q: What programming language do I work with in Defold? 
A: Game logic in your Defold project is primarily written using the Lua language (specifically Lua 5.1/LuaJIT, refer to the Lua manual for details). Lua is a lightweight dynamic language that is fast and very powerful. Starting from version 1.8.1, Defold supports the use of transpilers that emit Lua code. With transpiler extension installed, you can use alternative languages — such as Teal — to write statically-checked Lua. You can also use native code (C/C++, Objective-C, Java and JavaScript depending on the platform) to extend the Defold engine with new functionality. When building custom materials, OpenGL ES SL shader language is used to write vertex and fragment shaders.

Q: Can I use C++ to write game logic? 
A: C++ support exists in Defold mainly to write native extensions which interface with third party SDKs or platform specific APIs. The dmSDK (the C++ API for Defold used in native extensions) will be expanded during 2024 so that it is possible to write all game logic in C++ if a developer so wishes. Lua will still be the main language used for game logic, but with the expanded C++ API it will be possible to write game logic using C++ too. The work to expand the C++ API is mainly about moving existing private header files to the public section and cleaning up APIs for public use.

Q: Can I use TypeScript with Defold? 
A: TypeScript is not officially supported. The community maintains a toolkit, ts-defold, for writing TypeScript and transpiling it to Lua straight from VSCode.

Q: Can I use Haxe with Defold? 
A: Haxe is not officially supported. The community maintains hxdefold for writing Haxe and transpiling it to Lua.

Q: Can I use C# with Defold? 
A: The Defold Foundation will be adding C# support and make it available as a library dependency. C# is a widely adopted programming language and it will help studios and developers heavily invested in C# to transition to Defold.

Q: I am concerned that adding C# support will have a negative impact on Defold. Should I be worried? 
Defold is NOT moving away from Lua as a the primary scripting language. C# support will be added as a new language for extensions. It will not impact the engine unless you choose to use C# extensions in your project.

C# support will come at a price (executable size, runtime performance etc), but that’s for the individual developer/studio to decide upon.

As for C# itself, it’s a relatively minor change, since the extension system already support many languages (C/C++/Java/Objective-C/Zig). The SDKs will be kept in sync by generating the C# bindings. This will keep the bindings up-to-date with minimal effort.

The Defold Foundation has previously been against adding C# support in Defold, but has changed opinion for a number of reasons:

Studios and developer continue to request C# support.
C# support has been scoped down to extensions only (i.e. low effort).
The core engine will not be impacted.
The C# APIs can be kept in in sync with minimal effort if they are generated.
C# support will be based on DotNet 9 with NativeAOT, thus generating static libraries that the existing build pipeline can link against (just like any other Defold extension).
Platform questions 
Q: What platforms does Defold run on? 
A: The following platforms are supported for the editor/tools and the engine runtime:

System	Version	Architectures	Supported
macOS	11 Big Sur	x86-64, arm-64	Editor and Engine
Windows	Vista	x86-32, x86-64	Editor and Engine
Ubuntu (1)	18.04	x86-64	Editor
Linux (2)	Any	x86-64	Engine
iOS	11.0	arm-64	Engine
Android	4.4 (API level 19)	arm-32, arm-64	Engine
HTML5	 	asm.js, wasm	Engine
(1 The editor is built and tested for 64-bit Ubuntu 18.04. It should work on other distributions as well but we give no guarantees.)

(2 The engine runtime should run on most 64-bit Linux distributions as long as graphics drivers are up to date, see below for more information on graphics APIs)

Q: What target platforms can I develop games for with Defold? 
A: With one click you can publish to PS4™, Nintendo Switch, iOS, Android and HTML5 as well as macOS, Windows and Linux. It’s truly one codebase with multiple supported platforms.

Q: What rendering API does Defold rely on? 
A: As a developer you only have to worry about a single render API using a fully scriptable rendering pipeline. The Defold render script API translates render operations into the following graphics APIs:

System	Graphics API	Note
macOS	OpenGL 3.3 or Metal	Vulkan via MoltenVK
Windows	OpenGL 3.3 or Vulkan 1.1	 
Linux	OpenGL 3.3 or Vulkan 1.1	 
Android	OpenGLES 3.0 or Vulkan 1.1	Fallback to OpenGLES 2.0
iOS	OpenGLES 3.0 or Metal	Vulkan via MoltenVK
HTML5	WebGL 2.0 or WebGPU	Fallback to WebGL 1.0
Q: Is there a way to know what version I’m running? 
A: Yes, select the “About” option in the Help menu. The popup clearly shows Defold beta version and, more importantly, the specific release SHA1. For runtime version lookup, use sys.get_engine_info().

The latest beta version available for download from http://d.defold.com/beta can be checked by opening http://d.defold.com/beta/info.json (the same file exists for stable versions as well: http://d.defold.com/stable/info.json)

Q: Is there a way to know what platform the game is running on at runtime? 
A: Yes, check out sys.get_sys_info().

Editor Questions 
Q: What are the system requirements for the editor? 
A: The editor will use up to 75% of the available memory of the system. On a computer with 4 GB of RAM this should be enough for smaller Defold projects. For mid-sized or large projects it is recommended to use 6 GB or more of RAM.

Q: Are Defold beta versions auto-updating? 
A: Yes. The Defold beta editor checks for an update at startup, just like the Defold stable version does.

Q: Why am I getting an error saying “java.awt.AWTError: Assistive Technology not found” when launching the editor? 
A: This error is related to problems with Java assistive technology such as the NVDA screen reader. You probably have an .accessibility.properties file in your home folder. Remove the file and try launching the editor again. (Note: If you do use any assistive technology and require that file to be present then please reach out to us at info@defold.se to discuss alternative solutions).

Discussed here on the Defold forum.

Q: Why doesn’t the editor start or open my project? 
A: Check if there are spaces in the path leading up to the Defold application. For instance, if you put the folder Defold-macosx containing the macOS version of the editor in your Applications folder, then you should be ok. If you rename the folder Defold macosx the editor might not start anymore. On Windows, putting Defold under C:\Program Files\ can trigger this problem. This is due to a known bug in the underlying Eclipse framework.

Q: Why am I getting an error saying “sun.security.validator.ValidatorException: PKIX path building failed” when launching the editor? 
A: This exception occurs when the editor tries to make an https connection but the certificate chain provided by the server cannot be verified.

See this link for details on this error.

Q: Why am I am getting a “java.lang.OutOfMemoryError: Java heap space” when performing certain operations? 
A: The Defold editor is built using Java and in some cases the default memory configuration of Java might not be sufficient. If this happens you can manually configure the editor to allocate more memory by editing the editor configuration file. The configuration file, named config, is located in the Defold.app/Contents/Resources/ folder on macOS. On Windows it is located next to Defold.exe executable and on Linux next to the Defold executable. Open the config file and add -Xmx6gb to the line starting with vmargs. Adding -Xmx6gb will set the max heap size to 6 gigabytes (the default is usually 4Gb). It should look something like this:

vmargs = -Xmx6gb,-Dfile.encoding=UTF-8,-Djna.nosys=true,-Ddefold.launcherpath=${bootstrap.launcherpath},-Ddefold.resourcespath=${bootstrap.resourcespath},-Ddefold.version=${build.version},-Ddefold.editor.sha1=${build.editor_sha1},-Ddefold.engine.sha1=${build.engine_sha1},-Ddefold.buildtime=${build.time},-Ddefold.channel=${build.channel},-Ddefold.archive.domain=${build.archive_domain},-Djava.net.preferIPv4Stack=true,-Dsun.net.client.defaultConnectTimeout=30000,-Dsun.net.client.defaultReadTimeout=30000,-Djogl.texture.notexrect=true,-Dglass.accessible.force=false,--illegal-access=warn,--add-opens=java.base/java.lang=ALL-UNNAMED,--add-opens=java.desktop/sun.awt=ALL-UNNAMED,--add-opens=java.desktop/sun.java2d.opengl=ALL-UNNAMED,--add-opens=java.xml/com.sun.org.apache.xerces.internal.jaxp=ALL-UNNAMED
Linux Questions 
Q: Why is the Defold editor super small when run on a 4k or HiDPI monitor when using GNOME? 
A: Change the scaling factor before running Defold. source

$ gsettings set org.gnome.desktop.interface scaling-factor 2
$ ./Defold
A: An alternative solution, especially when you wish to scale up by a fraction, is to modify the Defold/config file and on the vmargs line add glass.gtk.uiScale: source

vmargs = -Dglass.gtk.uiScale=1.5,-Dfile.encoding=UTF-8,...
vmargs = -Dglass.gtk.uiScale=175%,-Dfile.encoding=UTF-8,...
vmargs = -Dglass.gtk.uiScale=192dpi,-Dfile.encoding=UTF-8,...
More on this value in the Arch Linux HiDPI wiki article.

Q: Why does mouse clicks on Elementary OS go through the editor onto whatever is below? 
A: Start the editor like this:

$ GTK_CSD=0 ./Defold
Q: The Defold editor crashes when opening a collection or game object and the crash refers to “com.jogamp.opengl” 
A: On certain distributions (like Ubuntu 18) there is an issue with the version of jogamp/jogl Defold uses vs. the version of Mesa on the system. You can override which GL version that gets reported when calling glGetString(GL_VERSION) by setting the MESA_GL_VERSION_OVERRIDE to 2.1 or a larger value but less than or equal to the version of your driver. You can check which is the maximum OpenGL version your driver supports using glxinfo:

glxinfo | grep version
Example output (look for “OpenGL version string: x.y”):

server glx version string: 1.4
client glx version string: 1.4
GLX version: 1.4
Max core profile version: 4.6
Max compat profile version: 4.6
Max GLES1 profile version: 1.1
Max GLES[23] profile version: 3.2
OpenGL core profile version string: 4.6 (Core Profile) Mesa 20.2.6
OpenGL core profile shading language version string: 4.60
OpenGL version string: 4.6 (Compatibility Profile) Mesa 20.2.6
OpenGL shading language version string: 4.60
OpenGL ES profile version string: OpenGL ES 3.2 Mesa 20.2.6
OpenGL ES profile shading language version string: OpenGL ES GLSL ES 3.20
GL_EXT_shader_implicit_conversions, GL_EXT_shader_integer_mix,
Use version 2.1 or version matching your graphics driver:

$ MESA_GL_VERSION_OVERRIDE=2.1 ./Defold
$ MESA_GL_VERSION_OVERRIDE=4.6 ./Defold
Q: Why am I getting “com.jogamp.opengl.GLException: Graphics configuration failed” when launching Defold? 
A: On certain distributions (for instance Ubuntu 20.04) there is an issue with the new Mesa drivers (Iris) when running Defold. You can try using an older driver version when running Defold:

$ MESA_LOADER_DRIVER_OVERRIDE=i965 ./Defold
Q: The Defold editor crashes when opening a collection or game object and the crash refers to libffi.so 
A: The libffi version of your distribution and the one required by Defold (version 6 or 7) does not match. Make sure libffi.so.6 or libffi.so.7 is installed under /usr/lib/x86_64-linux-gnu. You can download libffi.so.7 like this:

$ wget http://ftp.br.debian.org/debian/pool/main/libf/libffi/libffi7_3.3-6_amd64.deb
$ sudo dpkg -i libffi7_3.3-6_amd64.deb
Next you specify the path to this version in the LD_PRELOAD environment variable when running Defold:

$ LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libffi.so.7 ./Defold
Q: My OpenGL drivers are outdated. Can I still use Defold? 
A: Yes, it might be possible to use Defold if you enable software rendering. You can enable software rendering by setting the LIBGL_ALWAYS_SOFTWARE environment variable to 1:

$ LIBGL_ALWAYS_SOFTWARE=1 ./Defold
Q: Why doesn’t my Defold game start when I try to run it on Linux? 
A: Check the console output in the editor. If you get the following message:

dmengine: error while loading shared libraries: libopenal.so.1: cannot open shared object file: No such file or directory
Then you need to install libopenal1. The package name varies between distributions, and in some cases you might have to install the openal and openal-dev or openal-devel packages.

$ apt-get install libopenal-dev
Q: Why does the top menu close before I can select something? 
A: This is likely caused by the window manager used (for instance Qtile or i3). This is a known issue in JavaFX and it can either be solved by setting the GDK_DISPLAY environment variable to 1:¨

$ GDK_DISPLAY=1 ./Defold

D=2

Or by modifying the Defold/config file and on the vmargs line add -Djdk.gtk.version=2:

vmargs = -Djdk.gtk.version=2,-Dfile.encoding=UTF-8,...
Q: Why am I not able to browse all available file locations when I select Open From Disk? 
A: If you are running Defold from Steam using Flatpak you need to give Steam permission to access your other drives. You can modify the permissions of your Flatpak applications using Flatseal or similar tool.

Q: Why am I not able to open the web profiler or any other menu option which requires a browser? 
A: It is likely that an internal call to Desktop.getDesktop().browse(new URI(url)); fails since no browser is detected on non-Gnome systems. Try installing libgnome.

$ apt-get install libgnome
Android Questions 
Q: Is it possible to hide the navigation and status bars on Android? 
A: Yes, set the immersive_mode setting in the Android section of your game.project file. This lets your app take over the whole screen and capture all touch events on the screen.

Q: Why am I’m getting “Failure [INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES]” when installing a Defold game on device? 
A: Android detects that you try to install the app with a new certificate. When bundling debug builds, each build will be signed with a temporary certificate. Uninstall the old app before installing the new version:

$ adb uninstall com.defold.examples
Success
$ adb install Defold\ examples.apk
4826 KB/s (18774344 bytes in 3.798s)
      pkg: /data/local/tmp/Defold examples.apk
Success
Q: Why am I getting errors about conflicting properties in AndroidManifest.xml when building with certain extensions? 
A: This can happen when two or more extensions provide an Android Manifest stub containing the same property tag but with different values. This has for instance happened with Firebase and AdMob. The build error looks similar to this:

SEVERE: /tmp/job4531953598647135356/upload/AndroidManifest.xml:32:13-58
Error: Attribute property#android.adservices.AD_SERVICES_CONFIG@resource
value=(@xml/ga_ad_services_config) from AndroidManifest.xml:32:13-58 is also
present at AndroidManifest.xml:92:13-59 value=(@xml/gma_ad_services_config).
Suggestion: add 'tools:replace="android:resource"' to <property> element at
AndroidManifest.xml to override. 
You can read more about the issue and the workaround in reported Defold issue #9453 and Google issue #327696048.

HTML5 Questions 
Q: Why does my HTML5-app freeze at the splash screen in Chrome? 
A: In some cases it is not possible to run a game in the browser locally from the filesystem. Running from the editor serves the game from a local web server. You can, for instance, use SimpleHTTPServer in Python:

$ python -m SimpleHTTPServer [port]
Q: Why does my game crash with error “Unexpected data size” while loading? 
A: This usually happens when you are using Windows and make a build and commit it to Git. If you have the wrong line-ending configuration in Git it will change your line endings and thus also the data size. Follow these instructions to solve the problem: https://docs.github.com/en/free-pro-team@latest/github/using-git/configuring-git-to-handle-line-endings

IOS Questions 
Q: I am unable to install my Defold game using a free Apple Developer account. 
A: Make sure that you are using the same bundle identifier in your Defold project as you used in the Xcode project when you generated the mobile provisioning profile.

Q: How can I check the entitlements of a bundled application? 
A: From Inspect the entitlements of a built app:

$ codesign -d –ent :- /path/to/the.app

Q: How can I check the entitlements of a provisioning profile 
A: From Inspecting a profile’s entitlements:

$ security cms -D -i /path/to/iOSTeamProfile.mobileprovision

Windows Questions 
Q: Why are GUI box nodes without a texture transparent in the editor but show up as expected when I build and run? 
A: This error can happen on computers using AMD Radeon GPUs. Make sure to update your graphics drivers.

Q: Why am I getting ‘com.sun.jna.Native.open.class java.lang.Error: Access is denied’ when opening an atlas or a scene view? 
A: Try running Defold as administrator. Right-click on the Defold executable and select “Run as Administrator”.

Q: Why is my game not rendering properly on Windows using an Intel UHD integrated GPU (but my HTML5 build works)? 
A: Make sure to update your driver to a version higher than or equal to 27.20.100.8280. Check with the Intel Driver Support Asistant. Additional information can be found in this forum post.

Q: The Defold editor is crashing and the log shows AWTError: Assistive Technology not found 
If the editor crashes with a log mentioning Caused by: java.awt.AWTError: Assistive Technology not found: com.sun.java.accessibility.AccessBridge then follow these steps:

Navigate to C:\Users\<username>
Open the file called .accessibility.properties using a standard text editor (Notepad is fine)
Find the following lines in the config:
assistive_technologies=com.sun.java.accessibility.AccessBridge
screen_magnifier_present=true
Add a hashmark (#`) in front of theses lines
Save your changes to the file and restart Defold
Console Questions 
Q: Do I need to install additional tools to build for consoles? 
A: You will be able to create application bundles from the command line tools. Information about how to test on PlayStation®4, PlayStation®5 and Nintendo Switch hardware will be provided to you when you are given access to the respective platforms.

Q: Is it still easy to use a single code base if I decide to also target consoles? 
A: Yes, all of the standard Defold API functions are available also for the console platforms. In addition to the standard functionality you will also have access to a couple of PlayStation®4, PlayStation®5 and Nintendo Switch specific functions, but in general the code should be able to remain exactly the same across multiple platforms.

Publishing games 
Q: I’m trying to publish my game to AppStore. How should I respond to IDFA? 
A: When submitting, Apple has three checkboxes for their three valid use cases for the IDFA:

Serve ads within the app
Install attribution from ads
User action attribution from ads
If you check option 1, the app reviewer will look for ads to show up in the app. If your game does not show ads, the game might get rejected. Defold itself doesn’t use AD id.

Q: How do I monetize my game? 
A: Defold has support for in-app purchases and various advertising solutions. Check the Monetization category in the Asset Portal for an up to date list of available monetization options.

Errors using Defold 
Q: I can’t start the game and there is no build error. What’s wrong? 
A: The build process can fail to rebuild files in rare cases where it have previously encountered build errors that you have fixed. Force a full rebuild by selecting Project > Rebuild And Launch from the menu.

Game content 
Q: Does Defold support prefabs? 
A: Yes, it does. They are called collections. They allow you to create complex game object hierarchies and store those as a separate building blocks that you can instance in the editor or at runtime (through collection spawning). For GUI nodes there is support for GUI templates.

Q: I can’t add a game object as a child to another game object, why? 
A: Chances are that you try to add a child in the game object file and that is not possible. To understand why, you have to remember that parent-child hierarchies are strictly a scene-graph transform hierarchy. A game object that has not been placed (or spawned) into a scene (collection) is not part of a scene-graph and can’t therefore be part of a scene-graph hierarchy.

Q: Why can’t I broadcast messages to all children of a game object? 
A: Parent-child relations express nothing else than the scene-graph transform relations and should not be mistaken for object orientation aggregates. If you try to focus on your game data and how to best transform it as your game alter its state you will likely find less need to send messages with state data to many objects all the time. In the cases where you will need data hierarchies, these are easily constructed and handled in Lua.

Q: Why am I experiencing visual artifacts around the edges of my sprites? 
A: That is a visual artifact called “edge bleeding” where the edge pixels of neighboring pixels in an atlas bleed into the image assigned to your sprite. The solution is to pad the edge of your atlas images with extra row(s) and column(s) of identical pixels. Luckily this can be done automatically by the atlas editor in Defold. Open your atlas and set the Extrude Borders value to 1.

Q: Can I tint my sprites or make them transparent, or do I have to write my own shader for it? 
A: The built-in sprite shader that is used by default for all sprites has a constant “tint” defined:

  local red = 1
  local green = 0.3
  local blue = 0.55
  local alpha = 1
  go.set("#sprite", "tint", vmath.vector4(red, green, blue, alpha))
Q: If I set the z coordinate of a sprite to 100 then it’s not rendered. Why? 
A: The Z-position of a game object controls rendering order. Low values are drawn before higher values. In the default render script game objects with a depth ranging between -1 and 1 are drawn, anything lower or higher will not be drawn. You can read more about the rendering script in the official Render documentation. On GUI nodes the Z value is ignored and does not affect rendering order at all. Instead nodes are rendered in the order they are listed and according to child hierarchies (and layering). Read more about gui rendering and draw call optimization using layers in the official GUI documentation.

Q: Would changing the view projection Z-range to -100 to 100 impact performance? 
A: No. The only effect is precision. The z-buffer is logarithmic and have very fine resolution of z values close to 0 and less resolution far away from 0. For instance, with a 24 bit buffer the values 10.0 and 10.000005 can be differentiated whereas 10000 and 10005 cannot.

Q: There is no consistency to how angles are represented, why? 
A: Actually there is consistency. Angles are expressed as degrees everywhere in the editor and the game APIs. The math libs use radians. Currently the convention breaks for the angular_velocity physics property that is currently expressed as radians/s. That is expected to change.

Q: When creating a GUI box-node with only color (no texture), how will it be rendered? 
A: It is just a vertex colored shape. Bear in mind that it will still cost fill-rate.

Q: If I change assets on the fly, will the engine automatically unload them? 
A: All resources are ref-counted internally. As soon as the ref-count is zero the resource is released.

Q: Is it possible to play audio without the use of an audio component attached to a game object? 
A: Everything is component-based. It’s possible to create a headless game object with multiple sounds and play sounds by sending messages to the sound-controller object.

Q: Is it possible to change the audio file associated with an audio component at run time? 
A: In general all resources are statically declared with the benefit that you get resource management for free. You can use resource properties to change which resource that is assigned to a component.

Q: Is there a way to access the physics collision shape properties? 
A: No, it is currently not possible.

Q: Is there any quick way to render the collision objects in my scene? (like Box2D’s debugdraw) 
A: Yes, set physics.debug flag in game.project. (Refer to the official Project settings documentation)

Q: What are the performance costs of having many contacts/collisions? 
A: Defold runs a modified version of Box2D in the background and the performance cost should be quite similar. You can always see how much time the engine spends on physics by bringing up the profiler. You should also consider what kind of collisions objects you use. Static objects are cheaper performance wise for instance. Refer to the official Physics documentation in Defold for more details.

Q: What’s the performance impact of having many particle effect components? 
A: It depends on if they are playing or not. A ParticleFx that isn’t playing have zero performance cost. The performance implication of a playing ParticleFx must be evaluated using the profiler since its impact depends on how it is configured. As with most other things the memory is allocated up front for the number of ParticleFx defined as max_count in game.project.

Q: How do I receive input to a game object inside a collection loaded via a collection proxy? 
A: Each proxy loaded collection has their own input stack. Input is routed from the main collection input stack via the proxy component to the objects in the collection. This means that it’s not enough for the game object in the loaded collection to acquire input focus, the game object that holds the proxy component need to acquire input focus as well. See the Input documentation for details.

Q: Can I use string type script properties? 
A: No. Defold supports properties of hash types. These can be used to indicate types, state identifiers or keys of any kind. Hashes can also be used to store game object id’s (paths) although url properties are often preferable since the editor automatically populate a drop-down with relevant URLs for you. See the Script properties documentation for details.

Q: How do I access the individual cells of a matrix (created using vmath.matrix4() or similar)? 
A: You access the cells using mymatrix.m11, mymatrix.m12, mymatrix.m21 etc

Q: I am getting Not enough resources to clone the node when using gui.clone() or gui.clone_tree() 
A: Increase the Max Nodes value of the gui component. You find this value in the Properties panel when selecting the root of the component in the Outline.

The forum 
Q: Can I post a thread where I advertise my work? 
A: Of course! We have a special “Work for hire” category for that. We will always encourage everything which benefits the community, and offering your services to the community—for remuneration or not—is a good example of that.

Q: I made a thread and added my work—can I add more? 
A: In order to reduce bumping of “Work for hire” threads, you may not post more than once per 14 days in your own thread (unless it’s a direct reply to a comment in the thread, in which case you may reply). If you want to add additional work to your thread within the 14-day period, you must edit your existing posts with your added content.

Q: Can I use the Work for Hire category to post job offerings? 
A: Sure, knock yourselves out! It can be used for offerings as well as requests, e.g. “Programmer looking for 2D pixel artist; I’m rich and I’ll pay you well”.
