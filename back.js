function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var button = document.querySelector(".toggle-button");
    
    // Переключаем видимость sidebar
    sidebar.classList.toggle("hidden");

    // Меняем текст кнопки
    if (sidebar.classList.contains("hidden")) {
        button.textContent = "показать";
    } else {
        button.textContent = "скрыть";
    }
}
function add_content2_1() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">НАВИГАЦИЯ</h1>
                <p class="lesson-text">Итак, вы установили блендер и готовы приступить к работе <br>
                    <br> <br>
                    Для начала, давайте обсудим проекцию камеры во Viewport. Viewport – это основная рабочая область, в которой отображаются наши объекты. В Blender существуют два типа проекции – ортографическая и перспективная. На картинке показана разница отображения с одного угла.
                    <br> <br>
                    <img 
                        src="img/Nav-1.1(2).png" 
                        width=100%
                        alt="Screen1">
                    <br> <br>
                    Мы привыкли к перспективному отображению объектов, когда удалённые от нас объекты кажутся меньше. В такой перспективе и происходит рендер объекта. Ортографическая проекция часто кажется немного странной на первый взгляд, потому что объекты остаются одного размера независимо от расстояния. Тем не менее советую в работе использовать именно ортографический режим, потому что он обеспечивает более «техническое» понимание сцены, что упрощает моделирование и оценку пропорций. Переключение режимов быстро осуществляется с помощью Numpad5.
                    <br>
                    По умолчанию в блендере во Viewport находится 3 объекта – куб, камера и свет. Навигация по рабочему полю происходит благодаря зажатию колесика мыши. По умолчанию вращение осуществляется вокруг 3D-курсора.
                    <br> <br>
                    <img src="img/Nav-1.2.png" alt="Screen2" class="screen-2">
                    <br> <br>
                    По умолчанию вращение происходит вокруг условной точки в пространстве. Чтобы сделать центром выбранный объект, заходим во вкладку Правка — Настройки — Навигация (Edit — Preferences — Navigation) и отмечаем галочкой пункт Вращать вокруг выделения (Orbit Around Selection). Это сильно упростит дальнейшую работу. 
                    <br> <br>
                    <img 
                    src="img/Nav-1.3.png"
                    width=100%>
                    <br> <br>
                    Зажатие shift и колесика мыши одновременно позволяют перемещаться во Viewport. 
                </p>
    <button class="button-next-ur" onclick="add_content2_2()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_2() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class = "lesson-title">УДАЛЕНИЕ ОБЪЕКТА</h1>
    <p class = "lesson-text">
    Для начала работы нам нужно очистить наше рабочее поле. Самое время изучить горячую клавишу – X, которая отвечает за удаление выделенных объектов. Чтобы выделить все объекты сцены, нужно использовать клавишу – A.
    <br> <br>
    <img
        src = "img/Nav-2.1.png"
        width=100%>
    <br> <br>
    </p>
    <button class="button-next-ur" onclick="add_content2_3()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_3() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class = "lesson-title">ПЕРЕМЕЩЕНИЕ И ТРАНСФОРМАЦИЯ ОБЪЕКТА</h1>
    <p class = "lesson-text">
    Отлично! Теперь можно создать новый объект. Это можно сделать, используя комбинацию shift + A -> Mesh. На выбор предлагается множество мешей – различные фигуры, из которых мы и будем творить. 
    <br> <br>
    Давайте создадим куб, чтобы изучить остальные инструменты. Для перемещения объектов используется горячая клавиша – G. Попробуйте попермещать наш кубик по полю. Чтобы увеличить или уменьшить размер объекта, используется инструмент Scale, горячая клавиша – S. Давайте попробуем создать кучу различных объектов и поиграться с их размерами. 
    <br> <br>
    <img
        src = "img/Nav-3.1.png"
        width=100%>
    <br> <br>
    Давайте создадим куб, чтобы изучить остальные инструменты. Для перемещения объектов используется горячая клавиша – G. Попробуйте попермещать наш кубик по полю. Чтобы увеличить или уменьшить размер объекта, используется инструмент Scale, горячая клавиша – S. Давайте попробуем создать кучу различных объектов и поиграться с их размерами. 
    <br> <br>
    <img
        src = "img/Nav-3.2.png"
        width=100%>
    <br> <br>
    В работе часто пригождается копирование объекта, это осуществляется с помощью горячих клавиш shift+D. 
    <br> <br>
    Во время перемещения объектов вы, наверное, столкнулись с тем, что объекты могут оказать не в том месте, в каком кажется глазу с определенного угла. В будущем, для корректного расположения объектов мы будем использовать цифры на numpad. 1 – вид сбоку, 3 – вид спереди, 7 – вид сверху, 9 – вид снизу. Используйте эти отображения на постоянной основе, особенно при перемещении объектов.
    </p>
    <button class="button-next-ur" onclick="add_content2_4()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_4() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class = "lesson-title">РЕЖИМ РАБОТЫ</h1>
    <p class = "lesson-text">
    Теперь, поговорим о режимах работы в Blender. В программе существует два основных режима - Object Mode и Edit Mode. 
    <br><br>
    Object Mode – режим, который позволяет работать с объектом, как с единой, цельной сущностью. В нем осуществляется перемещение, масштабирование, вращение, всё то, что мы с вами изучили до этого. 
    <br><br>
    Edit Mode – режим редактирования, который позволяет работать с вершинами, рёбрами и гранями объекта. Этот режим используется для создания и изменения формы объектов.
    <br><br>
    Tab – переключение между Object Mode и Edit Mode.
    <br><br>
    Давайте на примере куба изучим работу с режимом редактирования. Выделим куб и нажмем Tab для перехода. Заметим, что выделение нашего кубы изменилось. 
    <br><br>
    <img
        src="img/Nav-4.1.png"
        width = 75%>
    <br><br>
    Переключение между редактированием вершин, ребер и граней осуществляется с помощью этих кнопок.
    <br><br>
    <img
        src="img/Nav-4.2.png"
        width = 60%>
    <br><br>
    Давайте выделим какую-нибудь вершину и с помощью G переместим ее в пространстве. Так модно поступить и с ребром, и с гранью. 
    <br><br>
    <img
        src="img/Nav-4.3.png"
        width = 100%>
    <br><br>
    Также, попробуем применить инструмент вращения и масштабирования. 
    <br><br>
    <img
        src="img/Nav-4.4.png"
        width = 100%>
    <br><br>
    Поэкспериментируйте с различными объектами и инструментами.
    <br><br>
    Важно помнить, что изменяя объект в режиме редактирования, изменения координат не передаются в object mode, поэтому всегда после работы с объектов в edit mode, нужно применить изменения в объектном режиме. Это делается с помощью сочетания клавиш ctrl + A –> scale. Такой сброс координат положения позволит избежать ошибок при применении различных инструментов и модификаторов. Не забывайте про это, при каждом редактировании объекта в edit mode!
    </p>
    <button class="button-next-ur" onclick="add_content2_5()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_5() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ИНСТРУМЕНТЫ EDIT MODE</h1>
    <p class="lesson-text">
    Теперь приступим к инструментам, которые используется в edit mode и пригодятся нам при дальнейшем моделировании. 
    <br><br>
    Bevel – инструмент для создания фасок, который как раз таки и чувствителен к scale. Горячие клавиши – ctrl + B. В режиме редактирования выберем ребро куба, и нажмем клавиши ctrl +B. У нас создатся скос. 
    <br><br>
    <img
        src="img/Nav-5.1.png"
        width = 80%>
    <br><br>
    Количество сегментов можно менять с помощью вращения колёсика мышки. 
    <br><br>
    <img
        src="img/Nav-5.2.png"
        width = 80%>
    <br><br>
    Следующий инструмент – Inset, горячая клавиша – I. Это инструмент, который создаёт полигон, внутри другого полигона. Чтобы протестировать его, в режиме редактирования выберем грань и применим этот инструмент.
    <br><br>
    <img
        src="img/Nav-5.3.png"
        width = 80%>
    <br><br>
    C помощью инструмента Extrude выдавливают грани, вершины и ребра объектов. Давайте попробуем выдавить грань. Горячая клавиша – E.
    <br><br>
    <img
        src="img/Nav-5.4.png"
        width = 80%>
    <br><br>
    Инструмент Loop Cut создает петли на геометрии объекта. Горячие клавиши – ctrl + R. Их количество также можно регулировать с помощью колёсика мыши, а чтобы разместить пятили посередине объекта, можно нажать правую кнопку мыши.
    <br><br>
    <img
        src="img/Nav-5.5.png"
        width = 80%>
    </p>
    <button class="button-next-ur" onclick="add_content2_6()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_6() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">СГЛАЖИВАНИЕ</h1>
    <p class="lesson-text">
    Также важный инструмент – сглаживание. Чтобы его применить нужно кликнуть правой кнопкой мыши на выбранный объект и выбрать в меню пункт Shade Smooth.
    <br><br>
    <img
        src="img/Nav-6.1.png"
        width = 80%>
    <br><br>
    Но такое сглаживание можнет отработать некорректно из-за расположения нормалей, поэтому можно использовать Shade Auto Smooth.
    <br><br>
    <img
        src="img/Nav-6.2.png"
        width = 80%>
    <br><br>
    Результат будет гораздо приятнее. 
    <br><br>
    <img
        src="img/Nav-6.3.png"
        width = 80%>
    </p>
    <button class="button-next-ur" onclick="add_content2_7()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content2_7() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ОТОБРАЖЕНИЕ ОБЪЕКТА</h1>
    <p class="lesson-text">
    В Blender существует несколько способов отображения объектов - Шейдинг вьюпорта. 
    <br><br>
    Изменять режим шейдинга можно также с помощью Z, которая отктоет круговое меню. 
    <br><br>
    <img
        src="img/Nav-7.1.png"
        width = 80%>
    <br><br>
    Wireframe - отображает только рёбра (каркасы) объектов в сцене. Режим удобен при установки объектов на определенное место и при редактировании объекта. 
    <br><br>
    <img
        src="img/Nav-7.2.png"
        width = 80%>
    <br><br>
    Solid – режим отображает сплошную геометрию. Режим «сплошной» хорош для моделирования и скульптинга. Основная работа будет проводится в этом режиме. 
    <br><br>
    <img
        src="img/Nav-7.3.png"
        width = 80%>
    <br><br>
    Material preview – предпросмотр материала. Этот режим особенно подходит для предварительного просмотра материалов и текстурирования.
    <br><br>
    Rendered – режим рендера даёт вам предварительный просмотр конечного результата, включая эффекты освещения сцены.
    </p>
    <button class="button-next-ur" onclick="next_ur3()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function next_ur3() {
    window.location.href = "course3.html";
}

function add_content3_1() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">СТЕНЫ И ПОЛ</h1>
                <p class="lesson-text">
                    Теперь можно приступить к самому интересному – к моделированию! 
                    <br>
                    Наша цель – создать комнату в разрезе с элементами декора. Вместе мы создадим основные элементы комнаты, но никто не ограничивает вас в вашей фантазии. Самостоятельное создание простых объектов, например, стакана или вазы, станет отличной практикой, поэтому не бойтесь и творите!
                    <br>
                    Для начала нам нужно освободить поле для работы, это можно сделать с помощью известной команды – «X -> Delete». 
                    <br> <br>
                    <img 
                    src="img/Model-1.png"
                    width = 100%>
                    <br> <br>
                    Добавим новый меш – поверхность, с помощью комбинации кнопок shift + A -> Mesh -> Plane. Увеличим нашу поверхность с помощью сочетания  S+4 до нужных размеров. С помощью кнопки tab перейдем в Edit Mode и выберем режим работы с гранями. С помощью E+Zвытянем два задних ребра. 
                    <br> <br>
                    <img
                    src = "img/Model-2.png"
                    width = 100%>
                    <br> <br>
                    Отлично, мы создали стены нашей комнаты! Но, чтобы мы не мешали соседям, а соседи не мешали нам нужно задать толщину нашей комнате. Для этого выделем все грани нашей комнаты в режиме редактирования граней, нажмем клавиши alt+E и в выпадающем меню выбираем Extrude Faces Along Normals, чтобы наш экструд корректно сработал. И с помощью S вытягиваем наши стены и пол, ведя мышкой в сторону. Не забываем про ctrl + A -> scale.
                    <br> <br>
                    <img
                    src="img/Model-3.png"
                    width = 100%>
                </p>
    <button class="button-next-ur" onclick="add_content3_2()">СЛЕДУЮЩИЙ МОДУЛЬ</button>

    `;
}

function add_content3_2() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">СТОЛ</h1>
                <p class="lesson-text">
                    Теперь в нашу комнату можно добавить стол, ведь без него жить очень трудно. В Object Mode создадим новую поверхность и растянем и зададим ей форму, растягивая её по какой-либо оси, например, по оси Y. Толщину столешнице можно задать с помощью клавиши E в Edit Mode. 
                    <br><br>
                    <img
                        src="img/Model-2.1.png"
                        width= 100%>
                    <br><br>
                    Наш столик перемещаем в Object Mode повыше в пространстве с помощью G+Z, чтобы добавить ему ножки. Для этого создадим новый меш – цилиндр. С помощью S цилиндру можно задать желаемый диаметр, а в edit mode, используя нижнюю грань и клавишу E задать необходимую высоту. 
                    <br><br>
                    <img
                        src="img/Model-2.2.png"
                        width=75%>
                    <br><br>
                    Самое время применить наши знания о модификаторах и использовать модификатор зеркала – mirror. Добавим модификатор и отзеркалим нашу ножку по осям X и Y. 
                    <br><br>
                    <img
                        src="img/Model-2.3.png"
                        width=75%>
                    <br><br>
                    Выделим нашу столешницу и ножки и нажмем ctrl+J, чтобы объединить их в одну фигуру. 
                    <br>Наш стол готов!
                </p>
    <button class="button-next-ur" onclick="add_content3_3()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_3() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">СТУЛЬЯ</h1>
                <p class="lesson-text">
                    Чтобы наш столик был удобен в использовании, создадим стулья. Создадим цилиндр, настроив ему 64 вершины. Сплюснем его до монетки и в режиме редактирования выберем нижнюю грань. С помощью инструмента Insert (I) зададим будущую ножку нашей табуретки.  
                    <br><br>
                    <img
                        src="img/Model-3.1.png"
                        width=100%>
                    <br><br>
                    С помощью E выдавим ножку. Для устойчивости табуретки снизу добавим петлю (ctrl + R) и расширим ножку снизу с помощью S. 
                    <br><br>
                    <img
                        src="img/Model-3.2.png"
                        width=100%>
                    <br><br>
                    Скопируем с помощью shift + D в объектном режиме табуретки и расположим их у нашего стола. 
                    <br><br>
                    <img
                        src="img/Model3.3.png"
                        width=100%>
                    <br><br>
                    У нас получилось отличное место для посиделок.
                </p>
    <button class="button-next-ur" onclick="add_content3_4()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_4() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ДИВАН</h1>
                <p class="lesson-text">
                    Нашей комнате нужен удобный мягкий диван, поэтому приступим к его созданию. Добавим в нашу сцену куб. Зададим ему форму подлокотника, деформируя его с помощью S+Y, S+Z, и переставим меш в нужное место.
                    <br><br>
                    <img
                        src="img/Model-4.1.png"
                        width=100%>
                    <br><br>
                    Теперь перейдем в режим редактирования и воспользуемся инструментом «петля» ctrl+R и создадим разрез.
                    <br><br>
                    <img
                        src="img/Model-4.2.png"
                        width=100%>
                    <br><br>
                    Скруглим внешнее ребро, чтобы видоизменить наш подлокотник, с помощью ctrl+B и прокручивания колёсика мышки. 
                    <br><br>
                    <img
                        src="img/Model-4.3.png"
                        width=100%>
                    <br><br>
                    Можно добавить плавный переход и заднему ребру, подняв его и скруглив рядом лежащее ребро.
                    <br><br>
                    <img
                        src="img/Model-4.4.png"
                        width=100%>
                    <br><br>
                    Наш подлокотник готов, можно выйти из режима редактирования. Скопируем наш подлокотник с помощью shift + D и поставим второй подлокотник на расстоянии. 
                    <br><br>
                    Займемся сидушкой дивана, для этого создадим еще один куб и зададим ему нужные размеры и переместим к нашим подлокотникам. 
                    <br><br>
                    <img
                        src="img/Model-4.5.png"
                        width=100%>
                    <br><br>
                    Этот куб будет основой нашего дивана. 
                    <br>
                    Для того чтобы создать матрас для дивана скопируем нашу основу. Уменьшим скопированный объект по оси Z и перейдём в режим редактирования. С помощью петли создадим 6 горизонтальных и 6 вертикальных разрезов. 
                    <br><br>
                    <img
                        src="img/Model-4.6.png"
                        width=100%>
                    <br><br>
                    Затем с помощью shift + alt выделим все петли и с пмощью bevel создадим фаски.
                    <br><br>
                    <br><br>
                    <img
                        src="img/Model-4.7.png"
                        width=100%>
                    <br><br>
                    Выделим нужные ребра и сдвинем их чуть вниз для создания рельефа подушки.
                    <br><br>
                    <img
                        src="img/Model-4.8.png"
                        width=100%>
                    <br><br>
                    Выходим из режима редактирования для добавления модификаторов subdivision surface и smooth. Значения можно подбирать исходя из ваших ожиданий от подушки. 
                    <br><br>
                    <img
                        src="img/Model-4.9.png"
                        width=100%>
                    <br><br>
                    Для мягкости можно использовать ПКМ -> Shade Smooth. Эту же подушку можно использовать для спинки дивана. Скопируем объект и повернем его по оси R+Y.
                    <br><br>
                    Установим все объекты на место и наш диван готов!
                    <br><br>
                    <img
                        src="img/Model-4.10.png"
                        width=100%>
                    <br><br>
                </p>
    <button class="button-next-ur" onclick="add_content3_5()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_5() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ШКАФ</h1>
                <p class="lesson-text">
                    Теперь можем приступить к созданию шкафа. Создадим куб и придадим ему желаемые размеры. Для создания полки воспользуемся модификатором Boolean. Создадим еще один куб и расположим его внутри нашего шкафа для создания полки и применим модификатор.
                    <br><br>
                    <img
                        src="img/Model-5.1.png"
                        width=100%>
                    <br><br>
                    Таким образом сделаем несколько полок. После применения модификаторов, оставшийся куб можно не удалять, а сделать из него ящик для нашего стеллажа, подогнав его размеры. Сделаем ручку для ящика из цилиндра. 
                    <br><br>
                    <img
                        src="img/Model-5.2.png"
                        width=100%>
                </p>
    <button class="button-next-ur" onclick="add_content3_6()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_6() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">КНИГИ</h1>
                <p class="lesson-text">
                    Чтобы наши полки не пустовали, создадим книжки. За основу возьмем куб и после масштабирования не забудем ctrl+A -> scale. В режиме редактирования выделим боковые ребра и с помощью ctrl+B зададим скосы. 
                    <br><br>
                    <img
                        src="img/Model-6.1.png"
                        width=100%>
                    <br><br>
                    Выделим грани, которые будут страницами нашей книги и с помощью I отделим их от обложки.
                    <br><br>
                    <img
                        src="img/Model-6.2.png"
                        width=100%>
                    <br><br>
                    Чтобы вдавить страницы книги равномерно, воспользуемся инструментом alt+E -> Extrude Faces Along Normals. 
                    <br><br>
                    <img
                        src="img/Model-6.3.png"
                        width=100%>
                    <br><br>
                    Наша книжка готова. Мы можем скопировать её и изменять толщину, высоту этой заготовки для создания целой библиотеки. Для гладкости можно применить Shade Auto Smooth. 
                    <br><br>
                    Наш стеллаж готов.
                    <br><br>
                    <img
                        src="img/Model-6.4.png"
                        width=50%>
                </p>
    <button class="button-next-ur" onclick="add_content3_7()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_7() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ТЕЛЕВИЗОР</h1>
                <p class="lesson-text">
                    Чтобы в нашей комнате не было скучно, создадим телевизор, для просмотра полезного и не очень контента.  
                    <br><br>
                    Создадим тумбу для нашего телевизора. Основной объект – куб, зададим ему желаемые размеры. В режиме редактирования с помощью I у грани создадим новую геометрию и вдавим её внутрь, с помощью E.
                    <br><br>
                    <img
                        src="img/Model-7.1.png"
                        width=100%>
                    <br><br>
                    Теперь займемся созданием телевизора. Создадим куб и уменьшим его размеры. Это будет подставкой для экрана.
                    <br><br>
                    В режиме редактирования выберем верхнюю грань и создадим геометрию для ножки.
                    <br><br>
                    <img
                        src="img/Model-7.2.png"
                        width=100%>
                    <br><br>
                    С помощью E вытянем нашу ножку и при желании сузим (клавиша S). 
                    <br><br>
                    <img
                        src="img/Model-7.3.png"
                        width=100%>
                    <br><br>
                    Займемся экраном. Для этого выделим верхнюю грань, нажмем клавишу E и Esc. Так поверх текущей грани создастся новая геометрия. Нажмём клавишу S и выберем ось, по которой будем растягивать экран, в нашем случае – ось X. 
                    <br><br>
                    <img
                        src="img/Model-7.4.png"
                        width=100%>
                    <br><br>
                    Нажимаем E и вытягиваем наш экран.
                    <br><br>
                    <img
                        src="img/Model-7.5.png"
                        width=100%>
                    <br><br>
                    Выделяем переднюю грань экрана и используем инструменты Insert (I) и Extrude (E) для создания рамок. Чтобы инструменты отработали корректно, в объектном режиме применим ctrl+A -> scale.
                    <br><br>
                    <img
                        src="img/Model-7.6.png"
                        width=100%>
                    <br><br>
                    Наш телевизор готов!
                </p>
    <button class="button-next-ur" onclick="add_content3_8()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content3_8() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">ГОТОВАЯ МОДЕЛЬ</h1>
                <p class="lesson-text">
                    Итак, мы создали основные объекты нашей комнаты!
                    <br><br>
                    <img
                        src="img/Model-8.1.png"
                        width=100%>
                    <br><br>
                    Но, наша комната выглядит как-то неуютно, нужно добавить какие-нибудь интересные детали. Это и будет вашим заданием! Придумайте какие-нибудь простые элементы декора, используя все ваши приобретенные знания. Не бойтесь экспериментировать! 
                    <br>
                    Можете вдохновиться нашим виденьем комнаты.
                    <br><br>
                    <img
                        src="img/Model-8.2.png"
                        width=100%>
                </p>
    <button class="button-next-ur" onclick="next_ur4()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function next_ur4() {
    window.location.href = "course4.html";
}

function add_content4_1() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">Mirror</h1>
                <p class="lesson-text">
                    Поговорим о модификаторах, которые пригодятся нам в работе.
                    <br>
                    Добавление модификаторов на объект происходит в специальной вкладке.
                    <br> <br>
                    <img
                    src="img/Mod-1.png"
                    width = 60%>
                    <br> <br>
                    Модификатор Mirror – модификатор зеркало, который позволяет отражать объект, относительно другого объекта по заданной оси.
                    <br>
                    Давайте отразим сферу относительно куба. Для этого выберем в списке модификаторов – mirror. 
                    <br> <br>
                    <img
                    src="img/Mod-2.png"
                    width = 100%>
                    <br> <br>
                    Пипеточкой выберем нужный объект относительно, которого нужно произвести отражение. В нашем случае – куб. Готово! Наша сфера отразилась по оси X.
                    <br>
                    <img
                    src="img/Mod-3.png"
                    width = 100%>
                </p>
    <button class="button-next-ur" onclick="add_content4_2()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content4_2() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">SUBDIVISION SURFACE</h1>
                <p class="lesson-text">
                    Subdivision surface - модификатор подразделения поверхности. Этот модификатор добавляет дополнительную геометрию объекту, чтобы он выглядел более сглажено и аккуратно.
                    <br> <br>
                    <img
                    src="img/Mod-2.1.png"
                    width = 40%>
                    <br> <br>
                    Вот так выглядит обезьянка с отсутсвием модификатора, с одной итерацией, и с тремя. 
                    <br> <br>
                    <img
                    src="img/Mod-2.2.png"
                    width = 100%>
                </p>
    <button class="button-next-ur" onclick="add_content4_3()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content4_3() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">SMOOTH</h1>
                <p class="lesson-text">
                    Модификатор Smooth оказывает примерно такой же эффект, как и вышеописанная функция. В нашем случае будет применён в паре с Subdivision surface.
                    <br> <br>
                    <img
                    src="img/Mod-3.1.png"
                    width = 40%>
                    <br> <br>
                    <img
                    src="img/Mod-3.2.png"
                    width = 100%>
                </p>
    <button class="button-next-ur" onclick="add_content4_4()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content4_4() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">BOOLEAN</h1>
                <p class="lesson-text">
                    Модификатор Boolean – выполняет различные операции с сетками, нам нужна лишь операция вычитания одного объекта из другого.
                    <br> <br>
                    Давайте вычтем маленький куб из большого. 
                    <br><br>
                    <img
                    src="img/Mod-4.1.png"
                    width = 100%>
                    <br> <br>
                    Для этого на большой куб добавим модификатор, режим – Difference, и пипеткой выберем маленький куб. 
                    <br>
                    Применим модификатор.
                    <br><br>
                    <img
                    src="img/Mod-4.2.png"
                    width = 60%>
                    <br><br>
                    Готово!
                    <br><br>
                    <img
                    src="img/Mod-4.3.png"
                    width = 100%>
                </p>
    <button class="button-next-ur" onclick="next_ur5()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function next_ur5() {
    window.location.href = "course5.html";
}


function add_content6_1() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">КАМЕРА</h1>
                <p class="lesson-text">
                    Давайте займемся расположением нашей текущей сцены в камере. Создадим её с помощью shift + A.
                    <br> <br>
                    <img
                        src="img/Render-1.png"
                        width=40%>
                    <br><br>
                    На numpad нажмем 0, чтобы перейти в просмотр с камеры. Для выхода тоже можно нажать 0. Нажмем клавишу G и зажмем колесико мыши, чтобы отдалить камеру. 
                    <br> <br>
                    <img
                        src="img/Render-2.png"
                        width=100%>
                    <br><br>
                    Выравниваем нашу комнатку примерно по центру картинки. 
                    <br>Размер окна самой камеры можно поменять в настройках сцены. 
                    <br> <br>
                    <img
                        src="img/Render-3.png"
                        width=60%>
                    <br><br>
                    Если нужно сделать рендер в ортографическом режиме, то отдаление в настройках камеры осуществляется так. Я буду совершать рендер именно в этом режиме.
                    <br><br>
                    <img
                        src="img/Render-4.png"
                        width=60%>
                    <br><br>
                    Для фона двайте создадим плоскость и создадим для нее материал.
                    <br><br>
                    <img
                        src="img/Render-5.png"
                        width=100%>
                    <br><br>
                    Самое время поменять способ отображения объектов на Rendered.
                    <br><br>
                    <img
                        src="img/Render-6.png"
                        width=20%>
                </p>
    <button class="button-next-ur" onclick="add_content6_2()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function add_content6_2() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    <h1 class="lesson-title">СВЕТ</h1>
                <p class="lesson-text">
                    Перейдем в раздел настроек мира, чтобы сделать окружение посветлее, а свет потеплее.
                    <br> <br>
                    <img
                        src="img/Render-2.1.png"
                        width=40%>
                    <br><br>
                    Теперь создадим источники освещения с помощью shift + A. Первый – Area. 
                    <br> <br>
                    <img
                        src="img/Render-2.2.png"
                        width=100%>
                    <br><br>
                    Приподнимем нашу область повыше (G) и увеличим её (S). В настройках освещения установим цвет и силу свечения.
                    <br> <br>
                    <img
                        src="img/Render-2.3.png"
                        width=100%>
                    <br><br>
                    Скопируем несколько источников света. Можно поменять силу освещения и цвет по желанию. Ориентируйтесь на вид из камеры.
                    <br><br>
                    <img
                        src="img/Render-2.4.png"
                        width=100%>
                    <br><br>
                    Создадим световой элемент Point и добавим его в угол нашей комнаты.
                    <br><br>
                    <img
                        src="img/Render-2.5.png"
                        width=100%>
                    <br><br>
                    Теперь, когда у нас есть освещение, можно завершить работу с цветом материалов. Как видно, мне захотелось немного поменять цветовую палитру комнаты 😊
                    <br><br>
                    <img
                        src="img/Render-2.6.png"
                        width=100%>
                        <br><br>
                        После того, как камера была настроена нажимаем на раздел Render или F12.
                    <br><br>
                    <img
                        src="img/Render-2.7.png"
                        width=100%>
                        <br><br>
                        После того, как изображение отрендерится, сохраним его. 
                    <br><br>
                    <img
                        src="img/Render-2.8.png"
                        width=100%>
                    <br><br>
                    Ура, всё готово! Мы большие молодцы!
                    <br><br>
                    <img
                        src="img/Render-2.9.png"
                        width=100%>
                </p>
    <button class="button-next-ur" onclick="next_ur7()">СЛЕДУЮЩИЙ МОДУЛЬ</button>
    `;
}

function next_ur7() {
    window.location.href = "course7.html";
}

function add_content() {
    const container = document.getElementById("lesson-container");
    container.innerHTML = `
    
    `;
}

