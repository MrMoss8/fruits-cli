import { Injectable } from '@nestjs/common';
import inquirer from 'inquirer';

@Injectable()
export class HelloService {
  /**
   * Método principal que ejecuta el programa "SaludaMe".
   */
  async run(): Promise<void> {
    console.log('\n👋 Hola! Este es el programa "SaludaMe".\n');

    try {
      const name = await this.promptForName();
      this.displayGreeting(name);
      await this.pause();
      console.log('\nRegresando al menú principal...\n');
    } catch (error) {
      console.error('❌ Ocurrió un error inesperado:', error.message);
    }
  }

  /**
   * Solicita al usuario que ingrese su nombre.
   * @returns El nombre ingresado por el usuario.
   */
  private async promptForName(): Promise<string> {
    const { name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Por favor, ingresa tu nombre:',
        validate: (input: string) => {
          if (!input.trim()) {
            return '❌ El nombre no puede estar vacío. Inténtalo de nuevo.';
          }
          return true;
        },
      },
    ]);
    return name.trim();
  }

  /**
   * Muestra el saludo con el nombre del usuario.
   * @param name El nombre del usuario.
   */
  private displayGreeting(name: string): void {
    console.log(`\n👋 ¡Hola, ${name}!\n`);
  }

  /**
   * Método para pausar la ejecución hasta que el usuario presione una tecla.
   */
  private async pause(): Promise<void> {
    console.log('\nPresiona cualquier tecla para continuar...\n');
    return new Promise((resolve) => {
      process.stdin.setRawMode?.(true);
      process.stdin.resume();
      process.stdin.once('data', () => {
        process.stdin.setRawMode?.(false);
        process.stdin.pause();
        resolve();
      });
    });
  }
}
