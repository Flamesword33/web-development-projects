for i in range(10):
    y = (i + 1)*2
    if y < 14 or y == 20:
        x = str(y)
        print("case " + x +":")
        print("  switch(roll){")
        for j in range(y):
            z = str(j + 1)
            print("    case " + z + ":")
            print("      document.getElementById(\"dice-image\").style.backgroundImage = \"url(\'../dice-roller/assets/d" + x + "-" + z + ".png\')\"; ")
            print("      break;")
        print("  }")
        print("  break;")
