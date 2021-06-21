class Board {// classe generica para os caminhos no tabuleiro
    constructor(row, column) {//construtor dos caminhos
        this.row = row;
        this.column = column;
        this.grid = this.initializeGrid();
        this.addObstacles();
        this.star = this.addStar();
        this.character = this.addCharacter();
        this.setNeighbors();
    }

    initializeGrid(){ // cria a matriz e inializa ela com nós vazios
        var board = [];// declara a "matriz", onde pra cada posicao no vetor eh criado outro vetor
        for(var i=0; i < this.row; i++){//percorre cada posicao do board
            board.push(new Array(this.column));
        }
        
        for(var i=0; i <this.row; i++){
            for(var j=0; j<this.column; j++){
                var node = new Node();
                node.setPosition(i,j);
                board[i][j] = node;
            }
        }
        
        return board;
    }

    getObstacles(){//cria um array de obstaculo
        var obstacles = [];
       /* for(var i=0; i<50; i++){// 50 => quantidade de obstaculos (determinado pelo grupo)
            var obstacle = new Node();
            obstacle.updatePosition(0, this.row-1, 0, this.column-1);
            obstacle.type = 1;
            obstacle.blocked = true;
            obstacles.push(obstacle);
        }*/
        var obstacle = new Node();
        obstacle.row = 0;
        obstacle.column = 2;
       // obstacle.updatePosition(0, 0, 0,2);
        obstacle.type = 1;
        obstacle.blocked = true;
       obstacles.push(obstacle);

       // obstacle.updatePosition(0, 0, 0,7);
       var obstacle2 = new Node();
       obstacle2.row = 0;
        obstacle2.column = 7;
        obstacle2.type = 1;
        obstacle2.blocked = true;
        obstacles.push(obstacle2);
        //obstacle.updatePosition(0, 0, 0,14);
        var obstacle3 = new Node();
        obstacle3.type = 1;
        obstacle3.blocked = true;
        obstacle3.row = 0;
        obstacle3.column = 14;
        obstacles.push(obstacle3);
       // obstacle.updatePosition(0, 0, 0,15);
       var obstacle4 = new Node();
       obstacle4.type = 1;
       obstacle4.blocked = true;
       obstacle4.row = 0;
        obstacle4.column = 15;
        obstacles.push(obstacle4);
       // obstacle.updatePosition(0, 0, 0,20);
       var obstacle5 = new Node();
       obstacle5.type = 1;
       obstacle5.blocked = true;
       obstacle5.row = 0;
        obstacle5.column = 20;
        obstacles.push(obstacle5);
       //obstacle.updatePosition(0, 0, 0,23);
       var obstacle6 = new Node();
       obstacle6.type = 1;
       obstacle6.blocked = true;
       obstacle6.type = 1;
       obstacle6.blocked = true;
       obstacle6.row = 0;
        obstacle6.column = 23;
        obstacles.push(obstacle6);

       // obstacle.updatePosition(0, 1, 0,4);
       var obstacle7 = new Node();
       obstacle7.type = 1;
       obstacle7.blocked = true;
       obstacle7.row = 1;
        obstacle7.column = 4;
        obstacles.push(obstacle7);
        //obstacle.updatePosition(0, 1, 0,6);
        var obstacle8 = new Node();
        obstacle8.type = 1;
        obstacle8.blocked = true;
        obstacle8.row = 1;
        obstacle8.column = 6;
        obstacles.push(obstacle8);

        //obstacle.updatePosition(0, 2, 0,10);
        var obstacle9 = new Node();
        obstacle9.type = 1;
        obstacle9.blocked = true;
        obstacle9.row = 2;
        obstacle9.column = 10;
        obstacles.push(obstacle9);

       // obstacle.updatePosition(0, 3, 0,1);
       var obstacle10 = new Node();
       obstacle10.type = 1;
       obstacle10.blocked = true;
       obstacle10.row = 3;
       obstacle10.column = 1;
        obstacles.push(obstacle10);
        //obstacle.updatePosition(0, 3, 0,16);
        var obstacle11 = new Node();
        obstacle11.type = 1;
        obstacle11.blocked = true;
        obstacle11.row = 3;
        obstacle11.column = 16;
        obstacles.push(obstacle11);
        //obstacle.updatePosition(0, 3, 0,20);
        var obstacle12 = new Node();
        obstacle12.type = 1;
        obstacle12.blocked = true;
        obstacle12.row = 3;
        obstacle12.column = 20;
        obstacles.push(obstacle12);
        //obstacle.updatePosition(0, 3, 0,21);
        var obstacle13 = new Node();
        obstacle13.type = 1;
        obstacle13.blocked = true;
        obstacle13.row = 3;
        obstacle13.column = 21;
        obstacles.push(obstacle13);
       // obstacle.updatePosition(0, 3, 0,23);
       var obstacle14 = new Node();
       obstacle14.type = 1;
        obstacle14.blocked = true;
       obstacle14.row = 3;
       obstacle14.column = 23;
        obstacles.push(obstacle14);

        //obstacle.updatePosition(0, 4, 0,11);
        var obstacle151 = new Node();
        obstacle151.type = 1;
        obstacle151.blocked = true;
        obstacle151.row = 4;
        obstacle151.column = 10;
        obstacles.push(obstacle151);
        var obstacle15 = new Node();
        obstacle15.type = 1;
        obstacle15.blocked = true;
        obstacle15.row = 4;
        obstacle15.column = 11;
        obstacles.push(obstacle15);
        //obstacle.updatePosition(0, 4, 0,12);
        var obstacle16 = new Node();
        obstacle16.type = 1;
        obstacle16.blocked = true;
        obstacle16.row = 4;
        obstacle16.column = 17;
        obstacles.push(obstacle16);
        //obstacle.updatePosition(0, 4, 0,13);
        var obstacle17 = new Node();
        obstacle17.type = 1;
        obstacle17.blocked = true;
        obstacle17.row = 4;
        obstacle17.column = 21;
        obstacles.push(obstacle17);
       // obstacle.updatePosition(0, 4, 0,17);
      /* var obstacle18 = new Node();
       obstacle18.type = 1;
       obstacle18.blocked = true;
       obstacle18.row = 4;
       obstacle18.column = 17;
        obstacles.push(obstacle18); */
       // obstacle.updatePosition(0, 4, 0,21);
      /* var obstacle19 = new Node();
       obstacle19.type = 1;
       obstacle19.blocked = true;
       obstacle19.row = 4;
       obstacle19.column = 21;
        obstacles.push(obstacle19);*/

        //obstacle.updatePosition(0, 5, 0,0);
        var obstacle20 = new Node();
        obstacle20.type = 1;
        obstacle20.blocked = true;
        obstacle20.row = 5;
        obstacle20.column = 0;
        obstacles.push(obstacle20);
        //obstacle.updatePosition(0, 5, 0,5);
        var obstacle21 = new Node();
        obstacle21.type = 1;
        obstacle21.blocked = true;
        obstacle21.row = 5;
        obstacle21.column = 5;
        obstacles.push(obstacle21);
        //obstacle.updatePosition(0, 5, 0,7);
        var obstacle22 = new Node();
        obstacle22.type = 1;
        obstacle22.blocked = true;
        obstacle22.row = 5;
        obstacle22.column = 7;
        obstacles.push(obstacle22);

      //  obstacle.updatePosition(0, 6, 0,6);
      var obstacle23 = new Node();
      obstacle23.type = 1;
      obstacle23.blocked = true;
      obstacle23.row = 6;
      obstacle23.column = 6;
        obstacles.push(obstacle23);
     //   obstacle.updatePosition(0, 6, 0,8);
     var obstacle24 = new Node();
     obstacle24.type = 1;
     obstacle24.blocked = true;
     obstacle24.row = 6;
     obstacle24.column = 8;
        obstacles.push(obstacle24);
       // obstacle.updatePosition(0, 6, 0,13);
       var obstacle25 = new Node();
       obstacle25.type = 1;
       obstacle25.blocked = true;
       obstacle25.row = 6;
       obstacle25.column = 13;
        obstacles.push(obstacle25);
        //obstacle.updatePosition(0, 6, 0,17);
        var obstacle26 = new Node();
        obstacle26.type = 1;
        obstacle26.blocked = true;
        obstacle26.row = 6;
        obstacle26.column = 17;
        obstacles.push(obstacle26);
       // obstacle.updatePosition(0, 6, 0,18);
       var obstacle27 = new Node();
       obstacle27.type = 1;
       obstacle27.blocked = true;
       obstacle27.row = 6;
       obstacle27.column = 18;
        obstacles.push(obstacle27);
     //   obstacle.updatePosition(0, 6, 0,22);
     var obstacle28 = new Node();
     obstacle28.type = 1;
     obstacle28.blocked = true;
     obstacle28.row = 6;
     obstacle28.column = 22;
        obstacles.push(obstacle28);
        
       // obstacle.updatePosition(0, 7, 0,1);
       var obstacle29 = new Node();
       obstacle29.type = 1;
       obstacle29.blocked = true;
       obstacle29.row = 7;
       obstacle29.column = 1;
        obstacles.push(obstacle29);
        //obstacle.updatePosition(0, 7, 0,8);
        var obstacle30 = new Node();
        obstacle30.type = 1;
        obstacle30.blocked = true;
        obstacle30.row = 7;
        obstacle30.column = 8;
        obstacles.push(obstacle30);
       // obstacle.updatePosition(0, 7, 0,10);
       var obstacle31 = new Node();
       obstacle31.type = 1;
       obstacle31.blocked = true;
       obstacle31.row = 7;
       obstacle31.column = 10;
        obstacles.push(obstacle31);
        //obstacle.updatePosition(0, 7, 0,15);
        var obstacle32 = new Node();
        obstacle32.type = 1;
        obstacle32.blocked = true;
        obstacle32.row = 7;
        obstacle32.column = 15;
        obstacles.push(obstacle32);
       // obstacle.updatePosition(0, 7, 0,19);
       var obstacle33 = new Node();
       obstacle33.type = 1;
       obstacle33.blocked = true;
       obstacle33.row = 7;
       obstacle33.column = 19;
        obstacles.push(obstacle33);

        //obstacle.updatePosition(0, 8, 0,7);
        var obstacle34 = new Node();
        obstacle34.type = 1;
        obstacle34.blocked = true;
        obstacle34.row = 8;
        obstacle34.column = 7;
        obstacles.push(obstacle34);
        //obstacle.updatePosition(0, 8, 0,8);
        var obstacle35 = new Node();
        obstacle35.type = 1;
        obstacle35.blocked = true;
        obstacle35.row = 8;
        obstacle35.column = 8;
        obstacles.push(obstacle35);
       // obstacle.updatePosition(0, 8, 0,11);
       var obstacle36 = new Node();
       obstacle36.type = 1;
       obstacle36.blocked = true;
       obstacle36.row = 8;
       obstacle36.column = 11;
        obstacles.push(obstacle36);
        //obstacle.updatePosition(0, 8, 0,14);
        var obstacle37 = new Node();
        obstacle37.type = 1;
        obstacle37.blocked = true;
        obstacle37.row = 8;
        obstacle37.column = 14;
        obstacles.push(obstacle37);
      //  obstacle.updatePosition(0, 8, 0,16);
      var obstacle38 = new Node();
      obstacle38.type = 1;
      obstacle38.blocked = true;
      obstacle38.row = 8;
      obstacle38.column = 16;
        obstacles.push(obstacle38);
       // obstacle.updatePosition(0, 8, 0,20);
       var obstacle39 = new Node();
       obstacle39.type = 1;
       obstacle39.blocked = true;
       obstacle39.row = 8;
       obstacle39.column = 20;
        obstacles.push(obstacle39);
        //obstacle.updatePosition(0, 8, 0,22);
        var obstacle40 = new Node();
        obstacle40.type = 1;
        obstacle40.blocked = true;
        obstacle40.row = 8;
        obstacle40.column = 22;
        obstacles.push(obstacle40);

       // obstacle.updatePosition(0, 9, 0,16);
       var obstacle41 = new Node();
       obstacle41.type = 1;
        obstacle41.blocked = true;
       obstacle41.row = 9;
       obstacle41.column = 16;
        obstacles.push(obstacle41);
       // obstacle.updatePosition(0, 9, 0,20);
       var obstacle42 = new Node();
       obstacle42.type = 1;
        obstacle42.blocked = true;
       obstacle42.row = 9;
       obstacle42.column = 20;
        obstacles.push(obstacle42);
        //obstacle.updatePosition(0, 9, 0,21);
        var obstacle43 = new Node();
        obstacle43.type = 1;
        obstacle43.blocked = true;
        obstacle43.row = 9;
        obstacle43.column = 21;
        obstacles.push(obstacle43);

        //obstacle.updatePosition(0, 10, 0,5);
        var obstacle44 = new Node();
        obstacle44.type = 1;
        obstacle44.blocked = true;
        obstacle44.row = 10;
        obstacle44.column = 5;
        obstacles.push(obstacle44);
       // obstacle.updatePosition(0, 10, 0,7);
       var obstacle45 = new Node();
       obstacle45.type = 1;
        obstacle45.blocked = true;
       obstacle45.row = 10;
       obstacle45.column = 7;
        obstacles.push(obstacle45);
        //obstacle.updatePosition(0, 10, 0,14);
        var obstacle46 = new Node();
        obstacle46.type = 1;
        obstacle46.blocked = true;
        obstacle46.row = 10;
        obstacle46.column = 14;
        obstacles.push(obstacle46);
        //obstacle.updatePosition(0, 10, 0,15);
        var obstacle47 = new Node();
        obstacle47.type = 1;
        obstacle47.blocked = true;
        obstacle47.row = 10;
        obstacle47.column = 15;
        obstacles.push(obstacle47);
         // obstacle.updatePosition(0, 10, 0,17);
         var obstacle48 = new Node();
         obstacle48.type = 1;
        obstacle48.blocked = true;
         obstacle48.row = 10;
         obstacle48.column = 17;
        obstacles.push(obstacle48);
        // obstacle.updatePosition(0, 10, 0,18);
        var obstacle49 = new Node();
        obstacle49.type = 1;
        obstacle49.blocked = true;
        obstacle49.row = 10;
        obstacle49.column = 18;
        obstacles.push(obstacle49);

        //obstacle.updatePosition(0, 11, 0,19);
        var obstacle50 = new Node();
        obstacle50.type = 1;
        obstacle50.blocked = true;
        obstacle50.row = 11;
        obstacle50.column = 19;
        obstacles.push(obstacle50);

       var obstacle51 = new Node();
        obstacle51.type = 1;
        obstacle51.blocked = true;
        obstacle51.row = 11;
        obstacle51.column = 22;
        obstacles.push(obstacle51);


        //obstacle.updatePosition(0, 11, 0,22);
       // var obstacle2 = new Node();
      //  obstacle2.row = 11;
        //obstacle2.column = 22;
       // obstacles.push(obstacle2);

        console.log(obstacles);

        return obstacles;
    }

    addObstacles(){//adiciona os obstaculos no tabuleiro
        var obstacles = this.getObstacles(this.row, this.column); //retorna um array com todos os obstaculos que vou colocar no grid
        var r;
        var c;

        for(var i=0; i<obstacles.length; i++){//percorre o array com os obstaculos
            r = obstacles[i].row;//pega a linha do obstaculo
            c = obstacles[i].column;//pega a linha do obstaculo
           if (this.grid[r][c].type != 0){//se a posicao nao esta vazia: da update pq tem algo la
                do{
                    obstacles[i].updatePosition(0, this.row-1,0, this.column-1);//atualiza a posicao do elemento
                    r = obstacles[i].row;//atualiza a linha do elemento
                    c = obstacles[i].column;//atualiza a coluna do elemento
                } while(this.grid[r][c].type != 0)
            } 
           this.grid[r][c] = obstacles[i];
        } 
    }

    addStar(){//adiciona a estrela no tabuleiro
        var star = new Node();//cria uma nova estrela 
        //star.updatePosition(0, this.row-1, 0, this.column-1);
        //star.updatePosition(0, this.row-1, 0, this.column-1);
        star.row = 6;
        star.column = 9;
        star.type = 2;
        
        //var starR = star.row;// pega a linha aleatrora da estrela
        //var starC = star.column;// pega a coluna aleatrora da estrela
        var starR = 6;// pega a linha aleatrora da estrela
        var starC = 9;// pega a coluna aleatrora da estrela
        
        /*while(this.grid[starR][starC].type != 0){
            star.updatePosition(0, this.row-1, 0, this.column-1);
            starR = star.row;
            starC = star.column;
        }*/
        this.grid[starR][starC] = star;//adiciona 2 no tabuleiro, estrela representada no tabuleiro => 2
        return star;
    }

    addCharacter(){//adiciona o personagem no tabuleiro
        var character = new Node();//cria uma nova personagem
        //character.updatePosition(0, this.row-1, 0, this.column-1); 
        character.row = 4;
        character.column = 3;
        character.type = 3;
        character.blocked = true;
       // var charR = character.row;// pega a linha aleatrora da personagem
        //var charC = character.column;// pega a coluna aleatrora da personagem
        var charR = 4;
        var charC = 3;// pega a coluna aleatrora da personagem
        while(this.grid[charR][charC].type != 0){
            character.updatePosition(0, this.row-1, 0, this.column-1);
            charR = character.row;
            charC = character.column;
        }
        this.grid[charR][charC] = character;//adiciona 3 no tabuleiro, character representada no tabuleiro => 3
        return character;
    }

    setNeighbors(){
        //tratando posicao 00 do board
            if(this.grid[0][1].blocked == false){
                this.grid[0][0].addNeighbor(this.grid[0][1]);
            }
            if(this.grid[1][0].blocked == false){
                this.grid[0][0].addNeighbor(this.grid[1][0]);
            }
            if(this.grid[1][1].blocked == false){
                this.grid[0][0].addNeighbor(this.grid[1][1]);
            }
            
        //se estiver no canto inferior esquerdo
            if(this.grid[this.row-2][0].blocked == false){
                this.grid[this.row-1][0].addNeighbor(this.grid[this.row-2][0]);
            }
            if(this.grid[this.row-1][1].blocked == false){
                this.grid[this.row-1][0].addNeighbor(this.grid[this.row-1][1]);
            }
            if(this.grid[this.row-2][1].blocked == false){
                this.grid[this.row-1][0].addNeighbor(this.grid[this.row-2][1]);
            }
            
        //se estiver no canto superior direito
            if(this.grid[0][this.column-2].blocked == false){
                this.grid[0][this.column-1].addNeighbor(this.grid[0][this.column-2]);
            }
            if(this.grid[1][this.column-1].blocked == false){
                this.grid[0][this.column-1].addNeighbor(this.grid[1][this.column-1]);
            }
            if(this.grid[1][this.column-2].blocked == false){
                this.grid[0][this.column-1].addNeighbor(this.grid[1][this.column-2]);
            }
        //se estiver no canto inferior direito
            if(this.grid[this.row-2][this.column-1].blocked == false){
                this.grid[this.row-1][this.column-1].addNeighbor(this.grid[this.row-2][this.column-1]);
            }
            if(this.grid[this.row-1][this.column-2].blocked == false){
                this.grid[this.row-1][this.column-1].addNeighbor(this.grid[this.row-1][this.column-2]);
            }
            if(this.grid[this.row-2][this.column-2].blocked == false){
                this.grid[this.row-1][this.column-1].addNeighbor(this.grid[this.row-2][this.column-2]);
            }
          
            for(var r = 0; r < this.row; r++ ){
                for(var c = 0; c < this.column; c++){
                    if((r==0 && c==0) || (r==(this.row-1) && c==(this.column-1)) && (r==(this.row-1) && c==0) && (r==(this.row-1) && c==(this.column-1))){
                        continue;
                    }
    
                    if(r == 0 && c != 0 && c != (this.column-1)){ // Toda a primeira linha menos as extremidades
                        if(this.grid[r][c-1].blocked == false){
                            this.grid[r][c].addNeighbor(this.grid[r][c-1]);
                        } 
                        if(this.grid[r+1][c-1].blocked == false){
                            this.grid[r][c].addNeighbor(this.grid[r+1][c-1]);
                        } 
                        if(this.grid[r+1][c].blocked == false){
                            this.grid[r][c].addNeighbor(this.grid[r+1][c]);
                        }
                        if(this.grid[r][c+1].blocked == false){
                            this.grid[r][c].addNeighbor(this.grid[r][c+1]);
                        }
                        if(this.grid[r+1][c+1].blocked == false){
                            this.grid[r][c].addNeighbor(this.grid[r+1][c+1]);
                        }
                    }else{
                        if(r == (this.row-1) && c != 0 && c != (this.column-1)){ // Toda a última linha menos as extremidades
                            if(this.grid[r][c-1].blocked == false){
                                this.grid[r][c].addNeighbor(this.grid[r][c-1]);
                            } 
                            if(this.grid[r-1][c-1].blocked == false){
                                this.grid[r][c].addNeighbor(this.grid[r-1][c-1]);
                            }
                            if(this.grid[r-1][c].blocked == false){
                                this.grid[r][c].addNeighbor(this.grid[r-1][c]);
                            }
                            if(this.grid[r][c+1].blocked == false){
                                this.grid[r][c].addNeighbor(this.grid[r][c+1]);
                            }
                            if(this.grid[r-1][c+1].blocked == false){
                                this.grid[r][c].addNeighbor(this.grid[r-1][c+1]);
                            }
                        } else{
                            if(r != 0 && r != (this.row-1) && c == 0){ // Toda a primeira coluna menos as extremidades
                                if(this.grid[r+1][c].blocked == false){
                                    this.grid[r][c].addNeighbor(this.grid[r+1][c]);
                                }
                                if(this.grid[r+1][c+1].blocked == false){
                                    this.grid[r][c].addNeighbor(this.grid[r+1][c+1]);
                                }  
                                if(this.grid[r][c+1].blocked == false){
                                    this.grid[r][c].addNeighbor(this.grid[r][c+1]);
                                }
                                if(this.grid[r-1][c].blocked == false){
                                    this.grid[r][c].addNeighbor(this.grid[r-1][c]);
                                }
                                if(this.grid[r-1][c+1].blocked == false){
                                    this.grid[r][c].addNeighbor(this.grid[r-1][c+1]);
                                }
                            } else{
                                if(r != 0 && r != (this.row-1) && c == (this.column-1)){ // Toda a última coluna menos as extremidades
                                    if(this.grid[r+1][c].blocked == false){
                                        this.grid[r][c].addNeighbor(this.grid[r+1][c]);
                                    }
                                    if(this.grid[r+1][c-1].blocked == false){
                                        this.grid[r][c].addNeighbor(this.grid[r+1][c-1]);
                                    } 
                                    if(this.grid[r][c-1].blocked == false){
                                        this.grid[r][c].addNeighbor(this.grid[r][c-1]);
                                    }
                                    if(this.grid[r-1][c].blocked == false){
                                        this.grid[r][c].addNeighbor(this.grid[r-1][c]);
                                    }
                                    if(this.grid[r-1][c-1].blocked == false){
                                        this.grid[r][c].addNeighbor(this.grid[r-1][c-1]);
                                    }
                                } 
                                else{
                                    if((r>0 && c>0 && r<(this.row-1) && c<(this.column-1))){ //quadrados centrais, ou seja, com 8 vizinhos
                                        if(this.grid[r+1][c].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r+1][c]);
                                        }
                                        if(this.grid[r+1][c+1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r+1][c+1]);
                                        }
                                        if(this.grid[r+1][c-1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r+1][c-1]);
                                        }
                                        if(this.grid[r-1][c].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r-1][c]);
                                        }
                                        if(this.grid[r-1][c+1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r-1][c+1]);
                                        }
                                        if(this.grid[r-1][c-1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r-1][c-1]);
                                        }
                                        if(this.grid[r][c+1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r][c+1]);
                                        }
                                        if(this.grid[r][c-1].blocked == false){
                                            this.grid[r][c].addNeighbor(this.grid[r][c-1]);
                                        }    
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    
}