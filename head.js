document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'cn\'>");
document.writeln("    <head>");
document.writeln("        <meta charset=\'UTF-8\' />");
document.writeln("        <meta");
document.writeln("        name=\'viewport\'");
document.writeln("        content=\'width=device-width, initial-scale=1, shrink-to-fit=no\'");
document.writeln("        />");
document.writeln("        <meta http-equiv=\'x-ua-compatible\' content=\'ie=edge\' />");
document.writeln("        <!-- MDB icon -->");
document.writeln("        <link rel=\'icon\' href=\'img/mdb-favicon.ico\' type=\'image/x-icon\' />");
document.writeln("        <!-- Font Awesome -->");
document.writeln("        <link");
document.writeln("        rel=\'stylesheet\'");
document.writeln("        href=\'https://use.fontawesome.com/releases/v5.15.2/css/all.css\'");
document.writeln("        />");
document.writeln("        <!-- Google Fonts Roboto -->");
document.writeln("        <link");
document.writeln("        rel=\'stylesheet\'");
document.writeln("        href=\'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\'");
document.writeln("        />");
document.writeln("        <!-- Dark MDB theme -->");
document.writeln("        <script type=\'text/javascript\'>");
document.writeln("        function setStyle(title) {");
document.writeln("");
document.writeln("          //预定义变量");
document.writeln("          var i, links;");
document.writeln("");
document.writeln("          //用DOM方法获得所有的link元素");
document.writeln("          links = document.getElementsByTagName(\'link\');");
document.writeln("          ");
document.writeln("          for(i=0; links[i]; i++) {");
document.writeln("");
document.writeln("            //判断此link元素的rel属性中是否有style关键字");
document.writeln("            //即此link元素是否为样式表link");
document.writeln("            //同时判断此link元素是否含有title属性");
document.writeln("            if(links[i].getAttribute(\'rel\').indexOf(\'style\') != -1");
document.writeln("          && links[i].getAttribute(\'title\')) {");
document.writeln("");
document.writeln("              //先不管三七二十一把它设为disabled");
document.writeln("              links[i].disabled = true;");
document.writeln("");
document.writeln("              //再判断它的title中是否有我们指定的关键字");
document.writeln("              if(links[i].getAttribute(\'title\').indexOf(title) != -1)");
document.writeln("");
document.writeln("                //如果有则将其激活");
document.writeln("                links[i].disabled = false;");
document.writeln("            }");
document.writeln("          }");
document.writeln("        }");
document.writeln("        </script>");
document.writeln("");
document.writeln("         ");
document.writeln("");
document.writeln("        <link rel=\'stylesheet\' type=\'text/css\'");
document.writeln("         title=\'主题A\' href=\'css/mdb.min.css\' />");
document.writeln("        <link rel=\'alternate stylesheet\' type=\'text/css\'");
document.writeln("         title=\'主题B\' href=\'css/mdb.dark.min.css\' />");
document.writeln("        <!-- Regular MDB theme -->");
document.writeln("        <link rel=\'stylesheet\' href=\'css/style.css\' />");
document.writeln("    </head>");
document.writeln("    <body>");
document.writeln("        <script type=\'text/javascript\'>");
document.writeln("            function changeStyle(t) {");
document.writeln("                $(\'link[title]\').each(function() {");
document.writeln("                    this.disabled = true;");
document.writeln("                    this.disabled = this.title != t;");
document.writeln("                });");
document.writeln("                return false;");
document.writeln("            }");
document.writeln("        </script>");
document.writeln("        <header>");
document.writeln("            <!-- Intro settings -->");
document.writeln("            <style>");
document.writeln("                #intro {");
document.writeln("                    /* Margin to fix overlapping fixed navbar */");
document.writeln("                    margin-top: 58px;");
document.writeln("                }");
document.writeln("                @media (max-width: 991px) {");
document.writeln("                    #intro {");
document.writeln("                        /* Margin to fix overlapping fixed navbar */");
document.writeln("                        margin-top: 45px;");
document.writeln("                    }");
document.writeln("                }");
document.writeln("            </style>");
document.writeln("            ");
document.writeln("            ");
document.writeln("            <nav class=\'navbar navbar-expand-lg navbar-light bg-light fixed-top\'>");
document.writeln("                <!-- Container wrapper -->");
document.writeln("                <div class=\'container-fluid\'>");
document.writeln("                    <!-- Navbar brand -->");
document.writeln("                    <a class=\'navbar-brand\' href=\'index.html\'>PixalOP</a>");
document.writeln("                    ");
document.writeln("                    <!-- Toggle button -->");
document.writeln("                    <button");
document.writeln("                        class=\'navbar-toggler\'");
document.writeln("                        type=\'button\'");
document.writeln("                        data-mdb-toggle=\'collapse\'");
document.writeln("                        data-mdb-target=\'#navbarSupportedContent\'");
document.writeln("                        aria-controls=\'navbarSupportedContent\'");
document.writeln("                        aria-expanded=\'false\'");
document.writeln("                        aria-label=\'Toggle navigation\'");
document.writeln("                        >");
document.writeln("                        <span class=\'navbar-toggler-icon\'></span>");
document.writeln("                        <i class=\'fas fa-bars\'></i>");
document.writeln("                    </button>");
document.writeln("                    ");
document.writeln("                    <!-- Collapsible wrapper -->");
document.writeln("                    <div");
document.writeln("                        class=\'collapse navbar-collapse\'");
document.writeln("                        id=\'navbarSupportedContent\'");
document.writeln("                        >");
document.writeln("                        <!-- Left links -->");
document.writeln("                        <ul class=\'navbar-nav me-auto mb-2 mb-lg-0\'>");
document.writeln("                            <li class=\'nav-item\'>");
document.writeln("                                <a class=\'nav-link active\' aria-current=\'page\' href=\'index.html\'");
document.writeln("                                    >首页</a");
document.writeln("                                >");
document.writeln("                            </li>");
document.writeln("                            <li class=\'nav-item\'>");
document.writeln("                                <a class=\'nav-link\' href=\'problems.html\'>题目列表</a>");
document.writeln("                            </li>");
document.writeln("                            <!-- Navbar dropdown -->");
document.writeln("                            <li class=\'nav-item dropdown\'>");
document.writeln("                            <li class=\'nav-item\'>");
document.writeln("                                <a");
document.writeln("                                    class=\'nav-link\'");
document.writeln("                                    href=\'contests.html\'");
document.writeln("                                    >比赛</a");
document.writeln("                                >");
document.writeln("                            </li>");
document.writeln("                            <li class=\'nav-item\'>");
document.writeln("                                <a");
document.writeln("                                    class=\'nav-link disabled\'");
document.writeln("                                    href=\'#\'");
document.writeln("                                    tabindex=\'-1\'");
document.writeln("                                    aria-disabled=\'true\'");
document.writeln("                                    >团队（不可用）</a");
document.writeln("                                >");
document.writeln("                            </li>");
document.writeln("                            ");
document.writeln("                            <li class=\'nav-item dropdown\'>");

document.writeln("                    </div>");
document.writeln("                    <ul class=\'navbar-nav ms-auto d-flex flex-row\'>");
document.writeln("                        <li class=\'nav-item dropdown\'>");
document.writeln("                            <a class=\'nav-link dropdown-toggle hidden-arrow d-flex align-items-center\' href=\'#\'");
document.writeln("                                id=\'navbarDropdownMenuLink\' role=\'button\' data-mdb-toggle=\'dropdown\' aria-expanded=\'false\'>");
document.writeln("                                <img src=\'https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg\' class=\'rounded-circle\' height=\'22\'");
document.writeln("                                alt=\'\' loading=\'lazy\' />");
document.writeln("                            </a>");
document.writeln("                            <ul class=\'dropdown-menu dropdown-menu-end\' aria-labelledby=\'navbarDropdownMenuLink\'>");
document.writeln("                                <li><a class=\'dropdown-item\' href=\'/px2/admin.html#dash\'>公开后台</a></li>");
document.writeln("                                <li><a class=\'dropdown-item\' href=\'#\'>设置</a></li>");
document.writeln("                                <li><a class=\'dropdown-item\' href=\'#\'>退出</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                    </ul>");
document.writeln("                </div>");
document.writeln("                <!-- Collapsible wrapper -->");
document.writeln("                <!-- Container wrapper -->");
document.writeln("                ");
document.writeln("            </nav>");
document.writeln("            <!-- Navbar -->");
document.writeln("        </header>");
document.writeln("        ");
document.writeln("        ");
document.writeln("");
document.writeln("        <!-- End your project here-->");
document.writeln("        ");
document.writeln("        <!-- MDB -->");
document.writeln("        <script type=\'text/javascript\' src=\'js/mdb.min.js\'></script>");
document.writeln("        <!-- Custom scripts -->");
document.writeln("        <script type=\'text/javascript\'>");
document.writeln("        </script>");
document.writeln("    </body>");
document.writeln("</html>");
document.writeln("");
