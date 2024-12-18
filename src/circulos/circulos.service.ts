import { Injectable } from '@nestjs/common';
import * as readline from 'readline';

@Injectable()
export class CirculosService {
  async run() {
    console.log('⚪ Bienvenido al programa "Círculos".\n');

    try {
      const radio = await this.askForInput('Por favor, ingresa el radio del círculo: ');

      // Validar que el radio sea un número positivo
      const numericRadio = parseFloat(radio);
      if (isNaN(numericRadio) || numericRadio <= 0) {
        console.log('❌ Error: Debes ingresar un número positivo para el radio.\n');
        return; // Salir del programa si la entrada es inválida
      }

      const perimetro = 2 * Math.PI * numericRadio;
      const area = Math.PI * numericRadio ** 2;

      console.log(`\n🔹 Perímetro: ${perimetro.toFixed(2)}`);
      console.log(`🔹 Área: ${area.toFixed(2)}\n`);
    } catch (error) {
      console.error('❌ Ocurrió un error durante la ejecución del programa:', error.message);
    } finally {
      // Pausa antes de regresar al menú
      await this.pause();
    }
  }

  private askForInput(prompt: string): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }

  private pause(): Promise<void> {
    console.log('\nPresiona cualquier tecla para regresar al menú...');
    process.stdin.setRawMode?.(true);
    process.stdin.resume();

    return new Promise((resolve) => {
      process.stdin.once('data', () => {
        process.stdin.setRawMode?.(false);
        process.stdin.pause();
        resolve();
      });
    });
  }
}
