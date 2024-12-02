Q: 디폴드가 정말 무료인가요?
A: 네, 디폴드 엔진과 에디터는 완전한 기능으로 무료입니다. 숨겨진 비용, 수수료 또는 권리료는 없습니다. 단순히 무료입니다.

Q: 디폴드 재단이 디폴드를 왜 줬을까요?
A: 디폴드 재단의 하나의 목표는 개발자를 전세계에게 디폴드 소프트웨어를 제공하고, 원본 코드를 무료로 이용할 수 있도록 하는 것입니다.

Q: 디폴드를 몇년 동안 지원하실 건가요? 
A: 우리는 디폴드에 대해 깊은 책임감을 느끼고 있습니다. 디폴드 재단은 많은 년대 후반에도 responsible한 주인으로 존재할 수 있도록 설립되었습니다. 없어지지는 않을 것입니다.

Here's the translated content:

 Q: 전문 개발을 위하여 디폴드를 신뢰할 수 있나요?
A: 당연히 가능합니다. 디폴드는 점점 많은 전문적인 게임 개발자와 게임 스튜디오들이 사용하는 것이고, 게임 쇼케이스에서 만들어진 예시 게임들을 확인하세요.

Q: 사용자 추적에 대한 정보가 필요합니다.
A: 우리는 웹사이트와 디폴드 편집기를 통해 익명 사용 데이터를 로그하여 서비스 및 제품을 개선하기 위해 이들을 사용하고 있습니다. 그러나 유저가 게임에서 분석 서비스를 추가하지 않는 한, 유저가 만드는 게임에는 사용자 추적이 없습니다. 더 자세한 정보는我们的隐私 정책에 나와있습니다.

Q: Who made 디폴드?
A: 디폴드는 Ragnar Svensson과 Christian Murray에 의해 창안되었습니다. 그들은 2009년 엔진, 에디터 및 서버 개발을 시작했습니다. 킹과 디폴드는 2013년에 파트너가되었으며 2014년에는 킹이 디폴드를 인수하었습니다. 전체 사연은 여기를 읽어보세요.

Q: 3D 게임을 디폴드에서 할 수 있나요? 
A: 완전히 가능합니다! 엔진은 풀 블로우 3D 엔진입니다. 그러나 도구 세트는 2D에 더 적합하므로 자체적으로 많은 노동력을 들여야 합니다.betteR 3D 지원이 계획중입니다.

Q: 디폴드에서私は何言語でプログラミングを行うのか?
A: 디폴드 프로젝트 내의 게임 로직은 Lua 언어를 사용하여 작성됩니다. (참고로, Lua 5.1/LuaJIT. Lua 문서 참조). Lua는 가볍고 강력한 동적 언어입니다. 버전 1.8.1부터 시작하는 디폴드는 transpiler가 Lua 코드를.emit할 수 있도록 지원합니다. transpiler 확장 프로그램이 설치된 경우, Teal과 같은 대체 언어 -을 사용하여 정적으로 검토된 Lua로 작성할 수 있습니다. 또한 플랫폼에 따라 C/C++, Objective-C, Java 및 JavaScript와 같은 native code를 사용하여 디폴드 엔진의 새로운 기능을 확장할 수 있습니다. Custom material을 빌드 할 때 OpenGL ES SL 셰이더 언어를 사용하여 Vertex 및 Fragment shader를 작성합니다.

Q: C++을 통해 게임 로직을 작성할 수 있나요?
A: 디폴드 (Defold) 에서 C++은 원칙적으로 네이티브 익스텐션에서만 사용되며, 세 번째 SDK 또는 플랫폼 특정 API와 통신하기 위한 API를 나타합니다. Native Extensions에서 dmSDK (디폴드에서 사용되는 네이티브 익스텐션을 위한 C++ API)는 2024년에 확장되어 개발자가 원하는대로 게임 로직 전체를 C++으로 작성할 수 있습니다. Lua는 여전히 주로 게임 로직을 위해 사용되지만 C++ API가 확장됨에 따라 게임 로직도 C++으로 작성할 수 있습니다. 이 작업은 메인 헤더 파일이 공공 섹션으로 옮겨지고, API를 공개하기 위한 목적과 비슷합니다.

Q: 디폴드와 타입스크립트를 사용할 수 있나요?
A: 디폴드는 공식적으로 지원하지 않지만 커뮤니티에서 개발한 toolkit인 ts-defold를 이용하여 TypeScript 코드를 작성하고, VSCode에서 Lua로 트랜스파일 할 수 있습니다.

Q: 디폴드와 함께 하스(Haxe) 사용이 가능합니까?
A: 하스 공식 지원은 없지만, 커뮤니티에서 hxdefold를 이용하여 하스를 lua로 전환하는 것을 관리하고 있습니다.

Q: 디폴드와 함께 C#를 사용할 수 있나요? 
A: 디폴드 재단은 C# 지원을 추가하고 라이브러리 의존성으로 제공하도록 하며, C#이 널리 채택된 프로그래밍 언어로 인수하기에 스튜디오 및 개발자들 특히 C#와 중점을 두고 있는 사람들에게는 디폴드 전환을 돕는 것이 될 것입니다.

Q: C# 지원을 추가하면 디폴드에 부정적인 영향을 미칠까봐 걱정이 된다. 디폴드를 사용할 때 염려할 필요는 없을 것이다.
A: 디폴드는 Lua를 주요 스크립팅 언어로 유지하기로 결정하였다. C# 지원은 확장 언어로 추가될것이다. 이 변경은 엔진의 작동에 영향을 주지 않는다. 개발자가 C# 확장을 프로젝트에 포함하는 경우에만 영향을 받을 것이다.

Q: C# 지원으로 인한 EXECUTABLE SIZE, RUNTIME PERFORMANCE 등 부가적인 비용에 대하여 염려할 것은 없을까?
A: C# 지원은 사용자의 선택 사항이다. 개발자/스튜디오는 프로젝트에 필요하다고 판단될 때만 C# 확장을 사용할 수 있기 때문이다.

Q: 기존의 스크립팅 언어인 Lua와 함께 C# 지원을 추가하는 것은 큰 변경이 될까?
A: 이는 상대적으로 작은 변경이다. 이미 많은 언어 (C/C++/Java/Objective-C/Zig) 를 지원하는 확장 시스템이 있기 때문이다.

Q: SDK를 업데이트 하기에는 얼마나 많은 노력을 필요할까?
A: 기존의 스크립팅 언어와 C# API 간의 동기화는 SDK를 사용하여 쉽게 업데이트할 수 있다. 이는 상당한 노력 없이 업데이트가 가능해진다.

Q: 디폴드 재단은 이전에는 C# 지원에 대해 반대했던 것으로 알고 있는데, 최근에는 왜 C# 지원을 추가하기로 결정하였을까?
A: 개발자/스튜디오의 요청이 지속되었고, C# 확장만 추가되는 것을 조심한 결과이다. 디폴드 엔진은 이 변경에 영향을 받지 않는다. 기존의 빌드 파이프라인과 호환되는 스태틱 라이브러리(Static Library)를 생성하기 위해 NativeAOT 9을 사용할 예정이다.

Q: 디폴드에서 실행되는 플랫폼은 무엇인가요? 
A: 에디터/도구 및 엔진 런타임에 대한 지원된 플랫폼은 다음과 같습니다.

시스템	버전	아키텍처	Supported
macOS	11 Big Sur	x86-64, arm-64	에디터와 엔진
Windows	Vista	x86-32, x86-64	에디터 및 엔진
Ubuntu (1)	18.04	x86-64	에디터
Linux (2)	어떤 버전이든	x86-64	엔진
iOS	11.0	arm-64	엔진
안드로이드	4.4 (API level 19)	arm-32, arm-64	엔진
HTML5	 	asm.js, wasm	엔진
(1 에디터는 64비트 Ubuntu 18.04에서 빌드 및 테스트되었으며 다른 배포판에서도 작동할 수 있지만 우리는 보장하지 않습니다.)

(2 엔진 런타임은 그래픽 드라이버가 업데이트된 상태라면 대부분의 64비트 Linux 배포판에서 실행될 것으로 예상되나, 자세한 정보는 아래 그래픽 API에 대한 설명서를 참조하세요.)

Q: 디폴드와 함께 게임을 개발할 수 있는 타겟 플랫폼은 무엇인가? 
A: 단일 클릭만으로 PS4™, 닌텐도 스위치, iOS, 안드로이드 및 HTML5와 함께 macOS, Windows, Linux에 배포할 수 있으며, 정말로 하나의 코드베이스와 다수 지원된 플랫폼을 가집니다.

Q: 디폴드가 렌더링 API로 무엇을 사용합니까? 
A: 개발자라면 단 하나의 렌더링 API만 고려하면 됩니다. Fully scriptable rendering pipeline를 제공하는 디폴드 렌더 스크립트 API는 다음과 같은 그래픽스 API로 렌더링 연산을 변환합니다.

시스템	그래픽스 API	备注
macOS	OpenGL 3.3 or Metal	Vulkan via MoltenVK
Windows	OpenGL 3.3 or Vulkan 1.1	 
Linux	OpenGL 3.3 or Vulkan 1.1	 
Android	OpenGLES 3.0 or Vulkan 1.1	Fallback to OpenGLES 2.0
iOS	OpenGLES 3.0 or Metal	Vulkan via MoltenVK
HTML5 WebGL 2.0 or WebGPU	Fallback to WebGL 1.0

Q: 어떤 버전을 실행하고 있는지 알고 싶어요?
A: 예, 도움말 메뉴의 "소개" 옵션을 선택하세요. 팝업 창에서 디폴드 베타 버전과 더 중요한 것은 SHA1-specific 릴리즈를 확인할 수 있습니다. 런타임 버전 조회에 sys.get_engine_info()를 사용하세요.

최신 베타 버전은 http://d.defold.com/beta 에서 다운로드 할 수 있으며, 이는 stable 버전의 info.json (http://d.defold.com/stable/info.json)와 동일한 파일입니다.

Q: 런타임 중에 게임이 실행되는 플랫폼을 알 수 있는 방법은 없나요?
A: 예, 시스템 정보를 확인하는 sys.get_sys_info() 함수를 참고하세요.

Q: 편집기 시스템 요구 사항은 무엇입니까? 
A: 편집기는 사용 가능한 메모리의 75%을 소비할 것입니다. 4GB의 램이 있는 컴퓨터에서는 작은 디폴드 프로젝트에 충분할 수 있지만, 중간 크기 또는 큰 프로젝트를 위해서는 6GB 이상의 램이 권장됩니다.

Q: 디폴드 베타 버전은 자동 업데이트가 가능할까요?
A: 예. 디폴드 베타 에디터는 정식버전과 마찬가지로 실행 시 업데이트를 확인합니다.

Q: 디폴드 에디터를 실행하면 "java.awt.AWTError: Assistive Technology not found" 라는 오류 메시지가 나타나는데 왜 이러는 걸까요? 
A: 이 오류는 자바 assistive technology (예를 들어 NVDA 스크린 리더 등)와 관련이 있습니다. 홈 폴더에 .accessibility.properties 파일이 있을 가능성이 있습니다. 이 파일을 삭제하고 에디터를 다시 실행해 보세요. (참고로, assistive technology 를 사용하시는 경우 그리고 그 파일이 필요할 때에는 info@defold.se 로 연락하여 대안적 해결책에 대해 논의해 주시길 바랍니다.)


Q: 편집기가 시작되거나 프로젝트를 열리지 않는 이유는 무엇인가요? 
A: 편집기의 실행 경로에 공백이 있는지 확인해 보세요. 예를 들어, macOS 버전의 편집기를 Applications 폴더안의 Defold-macosx 폴더에 두고 있다면 문제가 생기지 않지만, 폴더 이름을 Defold macosx 으로 바꾸면 편집기가 실행되지 않을 수 있습니다. Windows에서는 Defold를 C:\Program Files\ 에 둘 수 있으면 문제가 발생할 수 있습니다. 이것은 Eclipse 프레임워크의 알려진 버그로 인해 생기는 문제입니다.

Q: 왜 편집기를 시작할 때 "sun.security.validator.ValidatorException: PKIX path building failed"이라고 오류가 나와요?
A: 이 예외는 편집기가 https 연결을 시도하지만 서버에서 제공하는 인증서 체인이 검증되지 못했을 때 발생합니다.

(참고) 자세한 내용은 이 링크를 참조하세요.

Q: 디폴드 에디터가 특정 작업을 수행할 때 왜 “자바.lang.OutOfMemoryError: 자바 힙 공간” 이라는 메시지가 나옵니까? 
A: 디폴드 에디터는 자바를 사용하여 만든 에디터이므로, 이때 자바의 기본적인 메모리 설정이 충분하지 않아서 나타나는 문제입니다. 이 경우에 해결책으로는 에디터의 메모리 설정을 수동적으로 수정할 수 있습니다. 디폴드 에디터의 설정 파일은 mac에서 /Applications/Defold.app/Contents/Resources/config 폴더에, windows에서는 Defold.exe 실행파일과 인접한 곳에, linux에서는 Defold 실행파일과 인접한 곳에 위치합니다. 이 config 파일을 열어 마지막 줄에 -Xmx6gb를 추가하면 메모리 설정이 6GB로 변경됩니다. (기본적으로는 4GB입니다.) 이렇게 하게되면 다음과 같은 형태가 됩니다.

vmargs = -Xmx6gb,-Dfile.encoding=UTF-8,-Djna.nosys=true,-Ddefold.launcherpath=${bootstrap.launcherpath},-Ddefold.resourcespath=${bootstrap.resourcespath},-Ddefold.version=${build.version},-Ddefold.editor.sha1=${build.editor_sha1},-Ddefold.engine.sha1=${build.engine_sha1},-Ddefold.buildtime=${build.time},-Ddefold.channel=${build.channel},-Ddefold.archive.domain=${build.archive_domain},-Djava.net.preferIPv4Stack=true,-Dsun.net.client.defaultConnectTimeout=30000,-Dsun.net.client.defaultReadTimeout=30000,-Djogl.texture.notexrect=true,-Dglass.accessible.force=false,--illegal-access=warn,--add-opens=java.base/java.lang=ALL-UNNAMED,--add-opens=java.desktop/sun.awt=ALL-UNNAMED,--add-opens=java.desktop/sun.java2d.opengl=ALL-UNNAMED,--add-opens=java.xml/com.sun.org.apache.xerces.internal.jaxp=ALL-UNNAMED

Here is the translation:

Q: 4k 또는 HiDPI 모니터에서 GNOME을 사용할 때 디폴드 편집기가 매우 작은 이유는 무엇인가?
A: 디폴드를 실행하기 전에 스케일링 팩터를 변경하십시오. 

$ gsettings set org.gnome.desktop.interface scaling-factor 2
$ ./Defold

A: 특히 스케일링이 1/4, 1/5 등 fractional 이더라도 스케일을 높이고 싶은 경우 디폴드/config 파일의 vmargs 라인에 glass.gtk.uiScale 옵션을 추가하여 해결할 수 있습니다.

vmargs = -Dglass.gtk.uiScale=1.5,-Dfile.encoding=UTF-8,...
vmargs = -Dglass.gtk.uiScale=175%,-Dfile.encoding=UTF-8,...
vmargs = -Dglass.gtk.uiScale=192dpi,-Dfile.encoding=UTF-8,...

이 값에 대한 자세한 내용은 Arch Linux HiDPI 위키 문서에서 확인할 수 있습니다.

Q: Elementary OS에서 마우스 클릭이 에디터로 들어가고 그 아래에 있는 내용으로 넘어가는 이유는 무엇인가?
A: 에디터를 시작하십시오. ( $ GTK_CSD=0 ./디폴드 )

Q: 디폴드 편집기를 열면 수집 또는 게임 오브젝트가 열리지 않으며, 런타임 에러 메시지에 “com.jogamp.opengl” 이 나타납니다.
A: 특정 배포판 (예를 들어 Ubuntu 18)에서는 jogamp/jogl을 사용하는 디폴드의 버전과 시스템에 설치된 Mesa 버전에 대한 문제가 있습니다. 이러한 문제를 해결하기 위해서는 MESA_GL_VERSION_OVERRIDE 환경변수를 2.1 또는 그래픽스 드라이버 버전과 일치하는 값으로 설정하여 glGetString(GL_VERSION) 함수에 호출되는 GL 버전을 오버라이드할 수 있습니다. 디폴드를 실행하기 전에 다음 명령어를 사용해 볼 수 있습니다.

glxinfo | grep version
예상 출력 (버전 문자열 “x.y” 를 찾으세요):

서버 글레스 버전 문자열: 1.4
 클라이언트 글레스 버전 문자열: 1.4
GLX 버전: 1.4
최대 코어 프로파일 버전: 4.6
최대.compat 프로파일 버전: 4.6
최대 GLES1 프로필 버전: 1.1
최대 GLES[23] 프로필 버전: 3.2
OpenGL core profile version string: 4.6 (Core Profile) Mesa 20.2.6
OpenGL core profile shading language version string: 4.60
OpenGL version string: 4.6 (Compatibility Profile) Mesa 20.2.6
OpenGL shading language version string: 4.60
OpenGL ES profile version string: OpenGL ES 3.2 Mesa 20.2.6
OpenGL ES profile shading language version string: OpenGL ES GLSL ES 3.20
GL_EXT_shader_implicit_conversions, GL_EXT_shader_integer_mix,

그래픽스 드라이버 버전에 일치하는 값을 사용해 디폴드를 실행합니다.

$ MESA_GL_VERSION_OVERRIDE=2.1 ./Defold
$ MESA_GL_VERSION_OVERRIDE=4.6 ./Defold

Q: 왜 디폴드 실행 시 "com.jogamp.opengl.GLException: Graphics configuration failed" 이 발생하는 것입니까? 
A: 특정 배포판 (예를 들어 Ubuntu 20.04) 에서 디폴드를 실행할 때 Mesa 드라이버가 새로워진 Iris 버전과 호환되지 않아 발생한다고 하니, 디폴드 실행 시 Mesa 드라이버 버전을 오래된 버전으로 변경해 보는 것이 좋습니다.

$ MESA_LOADER_DRIVER_OVERRIDE=i965 ./Defold

Q: 디폴드 에디터는 콜렉션 또는 게임 오브젝트를 열 때 종료되며, 그 사고의 원인으로 libffi.so 가 언급된다.
A: 당신의 배포판의 libffi 버전(버전 6 또는 7)과 디폴드가 요구하는 버전이 일치하지 않습니다. 디폴트가 정상적으로 작동하도록 하려면 /usr/lib/x86_64-linux-gnu 에서 libffi.so.6 또는 libffi.so.7 이 설치되어 있어야 합니다. 그에 따라 다음과 같이 libffi.so.7을 다운로드하여 설치해 주세요:

$ wget http://ftp.br.debian.org/debian/pool/main/libf/libffi/libffi7_3.3-6_amd64.deb
$ sudo dpkg -i libffi7_3.3-6_amd64.deb

이제 디폴드 실행시 LD_PRELOAD 환경 변수에 이 버전의 경로를 지정해 주세요:

$ LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libffi.so.7 ./Defold

Q: OpenGL 드라이버가 오래되었습니다. 디폴드 (Defold)를 사용할 수 있나요? 
A: 예, 소프트웨어 렌더링을 활성화하면 디폴드 (Defold)를 사용할 수 있을지도 모릅니다. LIBGL_ALWAYS_SOFTWARE 환경 변수를 1로 설정하여 소프트웨어 렌더링을 활성화할 수 있습니다.

$ LIBGL_ALWAYS_SOFTWARE=1 ./디폴드

Q: 디폴드 게임을 리눅스에서 실행할 때 왜 시작하지 않을까? 
A: 콘솔 출력 창에서 에러메시지를 확인해 보세요. 만약 다음과 같은 메시지가 나타나면, libopenal1이 설치되어 있지 않은 것을 의미합니다. 

dmengine: error while loading shared libraries: libopenal.so.1: cannot open shared object file: No such file or directory

해결 방법은 libopenal1을 설치하는 것입니다. 이는 각 운영체제의 패키지를 통해 달성할 수 있습니다. 따라서, 다음과 같이 설치해 주세요.

$ apt-get install libopenal-dev

Q: 위 메뉴가 선택할 수 있기 전에 닫히는 이유는 무엇인가요? 
A: 이는 윈도우 관리자 (예를 들어 Qtile 또는 i3) 를 사용하는 경우입니다. 이 는 자바FX 에서 알려진 문제이며 JDK_DISPLAY 환경 변수를 1 로 설정하거나 Defold/config 파일을 수정하여 -Djdk.gtk.version=2를 vmargs 라인에 추가함으로써 해결할 수 있습니다. 

$ GDK_DISPLAY=1 ./Defold

D=2

Q: 디폴드에서 Open From Disk 옵션을 선택하여 모든 파일 위치를 확인할 수 없이는 어쩌면 무엇입니까? 
A: Flatpak을 이용해 스팀으로 디폴드를 실행하고 있다면, 스팀에 나머지 드라이브의 접근 권한을 허용해야 합니다. Flatseal과 같은 도구를 사용하여 플랫팍 앱의 권한 설정을 변경할 수 있습니다.

Here are the translations:

**질문 (Q)**
 디폴드에서 웹 프로파일러 또는 브라우저가 필요한 다른 메뉴 옵션을 열 수 없음을 알게되었습니다. 

**답변 (A)**
 내부의 Desktop.getDesktop().browse(new URI(url)); 함수 호출이 실패한 것입니다. 이는 GNOME 시스템 이외의 환경에서 브라우저가 감지되지 않기 때문입니다. GNOME 라이브러리를 설치하십시오.

 $ apt-get install libgnome

Q: 안드로이드에서 내비게이션과 스테이터스 바를 숨킬 수 있나요? 
A: 예, 게임 프로젝트 파일의 안드로이드 섹션에_immersive_mode_ 설정을 하면 앱이 전부 화면을 차지하고 터치 이벤트를 캡처할 수 있습니다.

Q: 디폴드 게임을 기기에서 설치할 때 "Failure [INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES]" 에러 메시지가 나타납니다.
A: 안드로이드는 새로운 인증서로 앱을 설치하려고 하는 것을 감지합니다. 디버그 빌드를 패키징할 때, 각 빌드는 임시 인증서로 서명됩니다. 이전 버전의 앱을 삭제하고 다시 설치하세요:

$ adb uninstall com.defold.examples
성공
$ adb install 디폴드\ 예제.apk
4826 KB/s (18774344 바이트에 3.798초)
      pkg: /data/local/tmp/디폴드 예제.apk
성공

Q: Android 확장 기능과 함께 빌드할 때 AndroidManifest.xml 에서 충돌하는 속성에 대한 오류가 발생하는 이유는 무엇인가? 
A: 이 문제는 두 개 이상의 확장 기능이 동일한 속성 태그를 제공하고 다른 값을 가진 Android Manifest Stub을 포함하기 때문에 발생합니다. 예를 들어 Firebase와 AdMob의 경우입니다. 빌드 에러는 다음과 유사합니다:

/tmp/job4531953598647135356/upload/AndroidManifest.xml:32:13-58
에러: 속성 태그 android.adservices.AD_SERVICES_CONFIG@resource 의 속성값 (@xml/ga_ad_services_config) 가 AndroidManifest.xml:92:13-59 에서도 존재합니다. 속성값 (@xml/gma_ad_services_config) 

해결 방법: 프로퍼티 요소 안에 'tools:replace="android:resource"' 를 추가하여 오버라이드 하세요. 더 자세한 내용과 해결 방법은 reported Defold issue #9453 및 Google issue #327696048 에서 확인하실 수 있습니다.

Q: 내 HTML5 앱은 Chrome에서 스플래시 화면에서_freezing 이다? 
A: 몇 가지 경우에 브라우저로컬로 게임을 실행할 수 없으며, 에디터에서 게임을 실행하면 로컬 웹 서버에서 게임을 제공한다. 예를 들어, python의 SimpleHTTPServer를 사용하여 다음처럼 하실 수 있습니다.

$ python -m SimpleHTTPServer [포트번호]

Here's the translation:

Q: 게임이 로드하는 동안 에러 "Unexpected data size"가 발생하여 게임이 충돌합니다. 왜 그렇게 되는 거죠?

A: 이것은 윈도우를 사용하면서 게임을 빌드하고 Git에 커밋했을 때 발생하는 일반적인 문제입니다. Git의 줄 끝 설정이 잘못된 경우, 줄 끝이 바뀌면서 데이터 크기도 달라지게 됩니다. 이 문제를 해결하기 위한 방법은 여기서 찾으실 수 있습니다: https://docs.github.com/en/free-pro-team@latest/github/using-git/configuring-git-to-handle-line-endings

( Defold: 디폴드, Unexpected data size: 예상치 못한 데이터 크기, Why: 왜, Follow: 따라하다, solve: 해결하다, IOS: 안 그런 질문들)

Here's the translated QnA:

Q: 디폴드 게임을 무료 애플 개발자 계정으로 설치할 수 없습니다.
A: 디폴드 프로젝트에서 사용하는 버킷 아이디가 Xcode 프로젝트에 생성한 모바일 프러빤션 프로파일과 동일하게 설정되어 있는지 확인해 주세요.

Here is the translated content:

Q: 이 패키지 안에 포함된 앱의 권리 여부를 어떻게 확인할 수 있나요?
A: Inspect the entitlements of a built app:

$ codesign -d –ent :- /path/to/디폴드.app

Here's the translation:

Q: Provisioning 프로파일의 권한 인증을 어떻게 확인할 수 있나요?
A: Profile의 권한 인증을 확인하는 방법은 다음과 같습니다.

security cms -D -i C:\Path\To\iTunesProfile.mobileprovision

(Windows 환경에서 사용하는 경우 경로와 파일 이름은 반드시 영어로 작성되어야 합니다.)

Q: GUI 박스 노드에 텍스처가 없는 디폴드 에디터에서 투명하지만 빌드하고 실행했을 때 기대했던대로 나타나게 왜 이런 일이 발생할까요? 
A: 이 문제는 AMD Radeon GPU를 사용하는 컴퓨터에서 발생할 수 있습니다. 그래픽 드라이버를 최신 버전으로 업데이트하십시오.

Q: 디폴드에서 애틀러스(Atlas) 또는 씬 뷰(Scene View)를 열 때 'com.sun.jna.Native.open.class java.lang.Error: Access is denied'이라는 메시지가 나와요. 
A: 디폴드를 관리자 권한으로 실행해 보세요. 디폴드 ejecutable을 우클릭하고 "관리자 권한으로 실행"을 선택하세요.

Q: 윈도우에서 인텔 UHD 내장그래픽 GPU를 사용하여 디폴드 게임이 렌더링되지 않으면서 HTML5 빌드만 정상적으로 작동하는 이유는?
A: 디폴드 게임의 렌더링을 문제없이 확인하기 위해서는 드라이버 버전 27.20.100.8280 이상으로 업데이트하십시오. 인텔 드라이버 지원 어시스턴트를 통해最新버전의 드라이버가 설치되어있는지 확인하십시오. 추가 정보는 이 포스트에서 찾으실 수 있습니다.

Q: 디폴드 편집기에서 비정상적으로 종료되고 로그에 AWTError: Assistive Technology not found 가 표시되어 있다면 다음 단계를 따라라.
A: C:\Users\<username> 폴더로 이동하여 .accessibility.properties 파일을 오래된 텍스트 편집기를 사용하여 열것이다 (Notepad으로도 좋다)
.config 안의 다음 라인을 찾고 다음과 같이 수정하라
assistive_technologies=com.sun.java.accessibility.AccessBridge
screen_magnifier_present=true
해당 라인 앞에 해시 기호 (#`)를 추가한후 저장하고 디폴드를 재실행하라.

Q: 콘솔 빌드에 필요한 추가 도구를 설치해야 하나요?
A: 콘솔(PlayStation 4, PS5, 닌텐도 스위치) 테스트를 하려면 디폴드 명령줄 툴을 사용하여 애플리케이션 버블을 생성할 수 있습니다. 플레이스테이션 4, 5 및 닌텐도 스위치 하드웨어에서 테스트하는 방법에 대한 정보는 해당 플랫폼에 접근 허용되었을 때 제공될 것입니다.

Q: 콘솔을 대상으로 게임을 출시하기로 결정했다면, 단일 코드 베이스를 사용하는 것이 여전히 쉽지 않나요?
A: 예, 디폴드 API의 표준 함수들은 모든 콘솔 플랫폼에서 이용 가능합니다. 표준 기능에 추가하여 PlayStation®4, PlayStation®5 및 Nintendo Switch에 대한 특정한 함수도 제공되며, 일반적으로 다중 플랫폼에서 코드를 동일하게 유지할 수 있습니다.

Q: 게임을 앱스토어에 업로드 하려 합니다. 어떻게 IDFA에 대한 질문에 대답해야 하나요? 
A: IDFA(Identifier for Advertisers) 관련하여 애플은 세 가지 사용 가능한 용도에 대해 선택박스를 제공합니다.

1. 앱 내에서 광고를 보여주기
2. 광고 설치 attribution을 하기
3. 사용자 액션 attribution을 하기
 
1번 옵션을 체크하면, 앱 리뷰어는 앱 내에서 광고가 나오는지 확인하므로, 게임이 광고를 출력하지 않으면 심사에 실패할 수도 있습니다.
디폴드 자체적으로 AD id 사용하지 않습니다.

Q: 내 게임을 어떻게 돈을 벌게 할 수 있을까?
A: 디폴드에는 인앱 구매 기능과 광고 솔루션 등 다양한 모금 방식이 지원됩니다. Asset Portal의 '모금' 카테고리를 참조하시면, 최신 버전의 모금 옵션 목록을 확인하실 수 있습니다.

Q: 게임을 시작할 수 없으며 에러 메시지도 없습니다. 이게 무슨 문제일까요? 
A: 빌드 과정에서 이전에 있었던 에러를 수정해도 간혹 파일을 다시 빌드하는 과정이 제대로 되지 않고, 프로젝트 > 리빌드 및 런칭을 선택하여 강제로 전체를 다시 빌드하고 시작해보세요.

Q: 디폴드에서 프리팹은 지원하나요?
A: 예, 지원합니다. 그들은 '컬렉션' 이라고 불리우며, 복잡한 게임 오브젝트 상속 구조를 만들고, 에디터 내 또는 런타임에 컬렉션 스폰으로 사용할 수 있도록 허용합니다. GUI 노드에 대해서는 템플릿 지원이 있습니다.

Q: 게임 오브젝트를 다른 게임 오브젝트의 자식으로 추가할 수 없다면?
A: 아마도 게임 오브젝트를 씬 파일에 추가하려고 한 것입니다. 하지만 이는 불가능합니다. 왜냐하면(parent-child) 계층 구조는 단순히 전환 계층 구조인 씬 그래프 계층이기 때문입니다. 게임 오브젝트가 아직 씬(collection)에 추가되지 않은 상태라면, 씬 그래프의 일부도 아니고, 따라서 자식으로 불러와질 수도 없습니다.

Q: 어째서 디폴드 내에서 모든 자식 게임 오브젝트로 메시지를 방송할 수 없나요? 
A: 부모-자식 관계는.scene-graph 변형 관계 만을 의미하고 오브젝트 지향 aggregate와 착각하지 마세요. 게임 데이터를 중점으로 두고, 게임이 상태를 변경하는 방식을 최적화 하다보면 자주 여러 오브젝트에게 상태 데이터를 보내야할 필요가 줄어들것이다. 실제로 필요한 경우 데이터 계층은 쉽게 루아에서 구성하고 관리할 수 있다.

Q: 저의 스프라이트 주변에서 시각적 오류를 경험하고 있어요?
A: 이러한 것은 이웃 픽셀의 Edge pixels이 sprite에 할당된 이미지로 bleeding하는 visula artifact인 "edge bleeding"입니다. 해법은 atlas image의 edge에 extra row(s)와 column(s)만큼 동일한 pixel을 padding해 주는 것입니다. 다행히 디폴드에서 atlas editor를 이용하여 자동으로 하도록 할 수 있습니다. Open your atlas하고 Extrude Borders value를 1로 설정하십시오.

Q: 스프라이트에 색을 입히거나 투명도를 만들 수 있나요? 내 влас한 셰이더를 작성해야 하나요?
A: 디폴드의 기본 스프라이트 셰이더는 모든 스프라이트가 기본으로 사용되는 “tint”라는 상수를 가지고 있습니다.

  local red = 1
  local green = 0.3
  local blue = 0.55
  local alpha = 1
  go.set("#sprite", "tint", vmath.vector4(red, green, blue, alpha))

Q: 100에서 스프라이트의 z 좌표를 설정하면 렌더링이 안 되는 이유는?
A: 게임 오브젝트의 Z-좌표가 렌더링 순서를 제어합니다. 낮은 값들은 높은 값보다 먼저 그려집니다. 기본 레인더 스크립트에서  -1 에서 1 사이의 깊이는 그려지는데, lower하거나 higher하면 그려지지 않습니다. 자세한 내용은 official Render 문서를 참조해 주세요. GUI 노드의 경우 Z 값은 무시되어 렌더링 순서에 영향을 미치지 않습니다. 대신 노드는 나열된 순서대로 그리고 자식 계층 및 레이어 (layering)에 따라 그려집니다. 자세한 내용은 official GUI 문서와 draw call 최적화 방법을 참조해 주세요.

Q: 보이는 프로젝션 Z-범위(-100 ~ 100)를 변경해도 성능에 영향을 주지 않는가요?
A: 아니요. 단, 정확도에만 영향이 있습니다. z 버퍼는 로그형태이며 0 근처의 z값은 매우 소수점이 세 자리까지 구분할 수 있지만, 반면 0에서 멀어질수록 구분해 나갈 수 있는 수치가 줄어듭니다. 예를 들어, 24비트 버퍼라면 10.0과 10.000005의 값을 구분할 수 있지만, 10000과 10005의 차이는 구분하지 못합니다.

Q: 각도가 표현되는 방식이 일관성이 없는데, 왜그럴까?
A: 실제로 각도가 표현되는 방식은 editor와 게임 API에서 모두 일관성을 가지고 있다.  수학 라이브러리는 라디안으로 사용된다. 현재 angular_velocity 물리 속성은 라디안/초로 표현되지만, 이점을 변경할 예정이므로, 전자는 degrees로 표현되야 한다.

Q: GUI 박스 노드 (box-node) 를 디폴드에서 만들 때, 색상만으로(텍스처없이) 그리는 경우 rendering은 어떻게될까요? 
A: 단색만으로 그려지는 사각형입니다. 노트로, 여전히 메모리 충분히 소진하는 비용이 발생합니다.

Q: 만약 런타임에 애셋을 변경하면 엔진이 자동으로 해제하나요?
A: 모든 리소스는 내부적으로 참조 카운터(ref-count)를 가지고 있습니다. 참조 카운터가 0이 되면 해당 리소스는 해제됩니다.

Q: 오디오 컴포넌트가 있는 게임 객체에 달려있는 것 없이 오디오를 연주할 수 있나요?
A: 모든 것이 컴포넌트 기반입니다. 여러 사운드와 함께 headless 게임 객체를 만들고, 사운드 컨트롤러 객체에게 메시지를 보내어 사운드를 연주할 수 있습니다.

Q: 실행시 오디오 파일을 연동한 오디오 컴포넌트의 오디오 파일을 변경할 수 있을까요? 
A: 보통 모든 리소스는 정적으로 선언되며 이로 인해 자원 관리를 무료로 얻을 수 있습니다. 컴포넌트에 할당된 리소스를 바꾸기 위해 리소스 속성을 사용할 수 있습니다.

Q: PHYSICS COLLISION SHAPE PROPERTIES를 접근할 수 있는 방법이 있나요?
A: 현재는 불가능합니다.

Q: 저의 씬에서 충돌 객체를 빠르게 렌더링 할 수 있는 방법이 있나요? (Box2D의 debugdraw와 같은)
A: 네, 게임 프로젝트에 물리학(debug) 플래그를 설정하시면 됩니다. (공식 Project settings 문서를 참조하세요.)

Q: 많은 contacts/collision이 있다면 성능 비용은 얼마인가요?
A: 디폴드의 배경에서 Box2D의 수정 버전을 실행하며, 성능 비용은 꽤 유사할 것입니다. 항상 엔진이 물리 계산에 소비하는 시간을 볼 수 있으니, 프로파일러를 열어보세요. 또한 어떤 종류의 충돌이 발생할지도 고려하세요. 정적 객체는 예를 들어 성능적으로 저렴한 편입니다. 더 많은 정보는 디폴드 공식 PHYSICS 문서를 참조해 주세요.

Q: particle effect component가 많으면 성능에 어떤 영향을 미치나요? 
A: 그들이 실행 중이면 달라집니다. 실행되지 않는 ParticleFx는 0의 수행비용을 가지고 있습니다. 실행 중인 ParticleFx의 성능 영향은 프로파일러를 사용해 평가해야 하며, 실행중인 ParticleFx의 영향은 구성 방식에 따라 달라질 수 있습니다. 다른 모든 것과 마찬가지로 메모리는 게임.project에서 정의된 max_count만큼 미리 할당됩니다.

Q: 디폴드 컬렉션 프록시를 통해 로드된 컷팅 안에 게임 객체에 입력을 받는 방법은?
A: 각 프록시 로드 된 컷팅에는 전용 인풋 스택이 있습니다. 입력은 메인 컷팅 인풋 스택을 통하여 프록시 컴포넌트를 통해 컷팅의 객체로 라우팅됩니다. 이 뜻은, 로드된 컷팅 안에 게임 객체가 인풋 포커스 를 얻는 것만으로是不 충분한 것입니다. 반대로, 프록시 컴포넌트를 보유하고 있는 게임 객체가 먼저 인풋 포커스 를 얻어야 합니다. 자세한 내용은 Input 문서 참조합니다.

Q: 스크립트 프로퍼티로 문자열 타입을 사용할 수 있나요? 
A: 불가능합니다. 디폴드는 해시 타입의 프로퍼티만 지원하며, 이들은 타입, 상태 식별자, 키 등 어떤 용도에도 사용될 수 있습니다. 해시는 또한 게임 객체 ID(경로)를 저장하는 데 사용할 수 있지만, URL 프로퍼티가 더 좋다. 에디터는 자동으로 관련된 URL을 드롭다운 목록에 표시해 줄 것입니다. Script properties 문서를 참조하세요.

Q: 매트릭스(디폴드의 vmath.matrix4() 등으로 생성된)를 구성하는 개별 셀에 접근하려면 어떻게 하나요? 
A:  mymatrix.m11, mymatrix.m12, mymatrix.m21 등과 같은 형식으로 각 셀에 접근하실 수 있습니다.

Here's the translation:

Q: 이클론 함수인 gui.clone() 또는 gui.clone_tree()를 사용할 때 Not enough resources to clone the node라는 오류가 나요.
A: 디폴드(Defold)의 GUI 구성 요소의 root 노드를 선택했을 때 Outline에 있는 Properties 패널에서 Max Nodes 값을 증가시키세요.

Q: 제가 내 작업물을 홍보하는 쓰레드를 작성할 수 있나요?
A: 물론! 저희는 "일용직" 카테고리가 따로 준비되어 있으니, 언제든지 사용하실 수 있습니다. 우리는 커뮤니티를 도움이 되는 모든 것을 ENCOURAGE하고 있으며, 커뮤니티에 서비스를 제공하며 보상받는 것을 포함한 여러분의 서비스 오퍼는 그 좋은 예입니다.

Q: 내 글이 스레드에 올라간 후에 추가로 업로드 할 수 있나요?
A: 스레드 작성자가 자신의 게시물에 추가 콘텐츠를 더하기 위해서는 원래 게시물의 업데이트로만 가능합니다. 14일 이내에 동일한 스레드를 이용하여 추가 게시물은 작성할 수 없습니다. 단, 그 안에서 다른 사람의 댓글에 대한 답글이면 가능합니다.
