def jogar():
    print("{{[{[{[{[{[{[{[{[{{[]}]]}}]}]}]}]}]}]}]}]}}")
    print("{[{[{[{[{[{[{[{WELCOME RAISSA}]}]}]}]}]}]}]}")
    print("{{[{[{[{[{[{[{[{[{{[]}]]}}]}]}]}]}]}]}]}]}}")
   
    palavra = "VERMIFUGAÇÃO".upper()
    letrasa = []

    for letra in palavra:
        letrasa.append("_")
   
    enforcou = False
    acertou = False
    erros = 0
   
    print(letrasa)
   
    while(not enforcou and not acertou):
       
        chute = input("DIGITE UMA LETRA:")
        chute = chute.strip().upper()
   
        if(chute in palavra):
            index = 0
            for letra in palavra:
                if(chute == letra):
                    letrasa[index] = letra
                index += 1
        else:
            erros += 1
           
        enforcou = erros == 6
        acertou = "_" not in letrasa
        print(letrasa)
   
    if(acertou):
        print("GANHOU")
    else:
        print("PERDEU")
    print("A PALAVRA ERA: ",palavra)
    print("FIM")
   
if(__name__== "__main__"):
    jogar()
