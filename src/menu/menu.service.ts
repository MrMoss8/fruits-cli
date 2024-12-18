import { Injectable } from '@nestjs/common';
import inquirer from 'inquirer';

@Injectable()
export class MenuService {
  private programs: Record<string, () => Promise<void>> = {}; // Manejamos las acciones como funciones async

  registerProgram(name: string, action: () => Promise<void>) {
    this.programs[name] = action;
  }

  async showMenu() {
    console.log('🍉 Bienvenido a FRUITS CLI 🍎');
    console.log('Tu divertida y herramienta modular CLI!\n');

    const menuOptions = [...Object.keys(this.programs), 'Salir'];

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedProgram',
        message: '✔ Selecciona un programa:',
        choices: menuOptions,
      },
    ]);

    if (answers.selectedProgram === 'Salir') {
      console.log('Adios! 👋');
      return;
    }

    const selectedProgram = this.programs[answers.selectedProgram];
    if (selectedProgram) {
      try {
        // Ejecuta el programa seleccionado
        await selectedProgram();
      } catch (error) {
        console.error('Ocurrió un error ejecutando el programa:', error);
      } finally {
        // Restaurar el flujo del terminal después de ejecutar un programa
        process.stdin.setRawMode?.(false);
        process.stdin.resume();
      }
    }

    // Mostrar el menú nuevamente
    await this.showMenu();
  }
}
